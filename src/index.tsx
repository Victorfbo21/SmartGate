import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/AuthContext';
import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, fromPromise } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import AuthQueries from './graphql/auth/auth.graphql';
import Debugger from "./helpers/debuger";


const container = document.getElementById('app');
const root = createRoot(container);
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const getNewToken = async () => {
  try {
    const authLinkRenewToken = setContext((_, { headers }) => {
      const token = localStorage.getItem('refreshToken');
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
    });

    const renewTokenApiClient = new ApolloClient({
      link: authLinkRenewToken.concat(httpLink),
      cache: new InMemoryCache()
    })

    const newToken = await renewTokenApiClient.query({
      query: AuthQueries.refreshToken
    })
    localStorage.setItem('token', newToken?.data.refreshToken.token)
    localStorage.setItem('refreshToken', newToken?.data.refreshToken.refreshToken)
  } catch (error) {
    localStorage.clear();
    Debugger(error.toString());
  }
};
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case "UNAUTHENTICATED":
            return fromPromise(
              getNewToken().catch((error) => {
                return;
              })
            )
              .flatMap(() => {
                const oldHeaders = operation.getContext().headers;
                const tokenRenewed = localStorage.getItem('token');
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `Bearer ${tokenRenewed}`,
                  },
                });
                return forward(operation);
              });
        }
      }
    }
  }
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache(),
});
console.log(process.env.PUBLIC_URL);
root.render(
  <HelmetProvider>
    <SidebarProvider>
      <AuthProvider>
        <BrowserRouter basename='/proxy/3000' >
          <App />
        </BrowserRouter>
      </AuthProvider>
    </SidebarProvider>
  </HelmetProvider>
)

serviceWorker.unregister();

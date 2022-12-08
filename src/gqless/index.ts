/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from '@gqless/react';
import { createSubscriptionsClient } from '@gqless/subscriptions';
import { createClient, QueryFetcher } from 'gqless';
import {
  generatedSchema,
  scalarsEnumsHash,
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames
} from './schema.generated';

const queryFetcher: QueryFetcher = async function (query, variables) {
  // Modify "https://api.biomethane.com.br/graphql" if needed

  // const response = await fetch('http://localhost:4200/graphql', {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({
      query,
      variables
    }),
    mode: 'cors'
  });

  const json = await response.json();

  return json;
};

const subscriptionsClient =
  typeof window !== 'undefined'
    ? createSubscriptionsClient({
      wsEndpoint: () => {
        // Modify if needed
        const url = new URL(
          process.env.REACT_APP_SUB_URL,
          // 'wss://api.biomethane.com.br/subscriptions',
          //'ws://localhost:5000/graphql',
          window.location.href
        );
        url.protocol = url.protocol.replace('http', 'ws');
        return url.href;
      }
    })
    : undefined;

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
  subscriptionsClient
});

export const { query, mutation, mutate, subscription, resolved, refetch } =
  client;

export const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
  useSubscription
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: true
  }
});

export * from './schema.generated';

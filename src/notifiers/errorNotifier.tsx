
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { IRefreshToken } from 'src/graphql/auth/auth.interfaces';
import AuthQueries from 'src/graphql/auth/auth.graphql';
const ErrorNotifier = ({ children }) => {
    const [doShowError, setDoShowError] = useState(false);
    return (
        <>
            {doShowError ? (
                <>
                    <h1 role="alert">Error!</h1>
                    <button onClick={() => setDoShowError(false)}>Dismiss</button>
                </>
            ) : null}
            {children(() => setDoShowError(true))}
        </>
    );
}

export default ErrorNotifier;

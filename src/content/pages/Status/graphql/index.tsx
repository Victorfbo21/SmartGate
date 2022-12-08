import { useState } from 'react';
import { useMutation, query, Mutation, Query } from 'src/gqless';

function LoginComponent() {
    const queries: Query = query;
    const [login, { isLoading, data, error }] = useMutation(
        (mutation: Mutation, args: { email: string; password: string }) => {
            const { user, token, refreshToken } = mutation.login(args);

            if (user) {
                return {
                    name: user.nome,
                };
            }

            return {
                error,
            };
        },
        {
            onCompleted(data) { },
            onError(error) { },
            refetchQueries: [queries.userMany],
            awaitRefetchQueries: true,
            suspense: false,
        }
    );

    const [formData, setFormData] = useState(() => ({ email: '', password: '' }));

    const errorMessage = data?.error || error?.message;

    return (
        <form>
            <label>Email</label>
            <input
                value={formData.email}
                onChange={(ev) => {
                    setFormData({
                        ...formData,
                        email: ev.target.value,
                    });
                }}
            />

            <label>Password</label>
            <input
                value={formData.password}
                onChange={(ev) => {
                    setFormData({
                        ...formData,
                        password: ev.target.value,
                    });
                }}
            />

            <button
                type="submit"
                disabled={isLoading}
                onClick={(ev) => {
                    ev.preventDefault();
                    login({ args: formData }).catch(console.error);
                }}
            >
                Login
            </button>

            {errorMessage ? <p>Error: {errorMessage}</p> : null}
        </form>
    );
}

export default LoginComponent;
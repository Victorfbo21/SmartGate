import { useQuery } from '@apollo/client';
import { createContext, useEffect, useState } from 'react';
import { User } from 'src/types/User';
import { useMutation, query, Mutation, Query } from 'src/gqless';
import AuthQueries from 'src/graphql/auth/auth.graphql';
import { GraphQLErrors } from '@apollo/client/errors';
import Debugger from 'src/helpers/debuger';

export type AuthContextType = {
    user: User | null;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const queries: Query = query;
    let localStorageUser = localStorage.getItem("user");
    let localStorageUserObject = localStorageUser ? JSON.parse(localStorageUser) : null;

    const [user, setUser] = useState(localStorageUserObject);

    const [login, { isLoading, data, error }] = useMutation(
        (mutation: Mutation, args: { email: string; password: string }) => {
            const logged = mutation.login(args);
            if (!logged) return;
            const { user, token, refreshToken } = logged;
            const userSession = {
                idUser: user._id,
                email: user.email,
                nome: user.nome,
            }
            if (token)
                localStorage.setItem("token", token);
            if (refreshToken)
                localStorage.setItem("refreshToken", refreshToken);
            if (userSession) {
                localStorage.setItem("user", JSON.stringify(userSession));
                setUser(userSession);
            }
            return { user, token, refreshToken, role: user.role };
        },
        {
            suspense: false,
        }
    );
    const signOut = () => {
        localStorage.clear();
        setUser(null);
    }
    const signIn = async (email: string, password: string) => {
        try {
            if (email && password) {
                const result: any = await login({ args: { email, password } }).catch(err => { console.error(err) });
                if (result?.token) {
                    return true
                } else {
                    return false
                }
            }
        } catch (error) {
            Debugger(error);
            return false;
        }
        return false
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}
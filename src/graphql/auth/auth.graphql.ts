import { gql } from '@apollo/client';
const AuthQueries = {
    login:
        gql`
        query Login($email: String!, $password: String!) {
            login(user:{email: $email, password: $password}) {
                user {
                    _id
                    email
                }
                token
                refreshToken
            }
        }`,
    refreshToken:
        gql`
        query RefreshToken
            {
                refreshToken{
                    data {
                        id
                        email
                    },
                    token
                    refreshToken
                }
            }
        `,
    getUserContext:
        gql`
        query getUserContext
            {
                getUserContext{
                    id
                    email
                    expiration
                }
            }
        `,
}

export default AuthQueries;
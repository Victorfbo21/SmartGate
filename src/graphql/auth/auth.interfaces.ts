export interface ILoginVars {
    email: string;
    password: string;
}

export interface ILoginUserData {
    _id: string;
    email: string;
}

export interface ILogin {
    user: ILoginUserData;
    token: string;
    refreshToken: string;
}

export interface ILoginData {
    login: ILogin;
}

export interface IRefreshTokenUserData {
    id: string;
    email: string;
}

export interface IRefreshTokenData {
    data: IRefreshTokenUserData
    token: string;
    refreshToken: string;
}
export interface IRefreshToken {
    refreshToken: IRefreshTokenData;
}


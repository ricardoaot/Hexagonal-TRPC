export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    token: string;
    refreshToken: string;
}

export type User = Pick <AuthenticatedUser, 'email' | 'name'>

export interface ForAuthenticating {
    login (email: string, password) : Promise<AuthenticatedUser>;
    register (user: User, password) : Promise<AuthenticatedUser>;
}   
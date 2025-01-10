import { AuthenticatedUser, User } from "../../app/schemas";

export interface ForAuthenticating {
    login (email: string, password) : Promise<AuthenticatedUser>;
    register (user: User, password) : Promise<AuthenticatedUser>;
}   
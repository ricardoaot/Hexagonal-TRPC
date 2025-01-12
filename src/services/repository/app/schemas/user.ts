export interface User {
    email: string;
    name: string;
    password: string;
}

export interface RepoUser extends User {
    id: string;
}
  
export type ExternalUser = Omit<RepoUser, "password">;
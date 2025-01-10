import { AuthDetails, ForControlAuthenticating, Permissions} from "../../ports/drivens"

const authDetailsMock: AuthDetails = {
    token: 'a3123213sadasd',
    refreshToken: '3sdasd123123'
}

const permissionsMock: Permissions = {
    admin: true,
    user: true
}

export const controlAuthenticatorStub: ForControlAuthenticating = {
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock)
    },
    getPermissions (_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock)
    }
}
import { User } from "../ports/drivers/for-authenticating";
import { ForControlAuthenticating, ForRepoQuerying } from "../ports/drivens";
import { AuthenticatedUser, ForAuthenticating } from "../ports/drivers";

export class DashboardApi implements ForAuthenticating {
    constructor(
        private readonly controlAuthenticator: ForControlAuthenticating,
        private readonly repoQuerier: ForRepoQuerying
    ){

    }    

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(email, password);

        const permissions = await this.controlAuthenticator.getPermissions(email, password);

        const user = await this.repoQuerier.getUser(email);

        return {   
            ...user,
            ...authDetails, 
            ...permissions  
        }

        /*
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            token: authDetails.token,
            refreshToken: authDetails.refreshToken,
            ...permissions
        }
        */
    }

    async register(user: User, password: string): Promise<AuthenticatedUser> {
        const newUser = await this.repoQuerier.createUser(user, password);

        const authDetails = await this.controlAuthenticator.getAuthDetails(newUser.email, password);

        const permissions = await this.controlAuthenticator.getPermissions(newUser.email, password);

        return {
            ...newUser,
            ...authDetails,
            ...permissions
        }
    }
}
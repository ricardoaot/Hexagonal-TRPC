import { ExternalUser } from '../../../repository/app/schemas';
import { User } from '../../app/schemas'

export interface ForRepoQuerying {
    getUser(email: string): Promise<ExternalUser>;
    createUser(user: User, password: string): Promise<ExternalUser>;
}
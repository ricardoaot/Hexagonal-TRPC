import { User as RepoUser } from "../../../repository/app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
    id: '1',
    name: 'Ricardo',
    email: 'ricardotest@gmail.com'
};

export class RepoQuerierStubAdapter implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }

    createUser(_user: RepoUser, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}
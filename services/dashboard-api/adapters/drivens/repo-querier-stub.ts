import { User as RepoUser } from "../../../repository/app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
    id: '123',
    name: 'dasdsa',
    email: 'dasdsa@dasd.com'
};

export class RepoQuerierStub implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }

    createUser(_user: RepoUser, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}
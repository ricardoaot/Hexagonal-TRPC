import { ExternalUser, RepoUser } from "../../../repository/app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: ExternalUser = {
    id: '1',
    name: 'Ricardo',
    email: 'ricardotest@gmail.com'
};

export class RepoQuerierStub implements ForRepoQuerying {
    getUser(_email: string): Promise<ExternalUser> {
        return Promise.resolve(userMock);
    }

    createUser(_user: RepoUser): Promise<ExternalUser> {
        return Promise.resolve(userMock);
    }
}
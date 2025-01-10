import { RepoQuerierStubAdapter, ControlAuthenticatorStubAdapter } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers/authenticator-proxy-adapter";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStubAdapter();
    const repoQuerierStub = new RepoQuerierStubAdapter();
    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub, repoQuerierStub
    );
    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApiMock);

    return {authenticatorProxyAdapter};
}

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {
    name: 'Ricardo',
    email: 'ricardotest@gmail.com'
}

authenticatorProxyAdapter.register(registerMock, '1234')
authenticatorProxyAdapter.login('ricardotest@gmail.com','1234')
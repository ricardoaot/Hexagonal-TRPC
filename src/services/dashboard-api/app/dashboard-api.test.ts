import { describe, it, expect } from "vitest";
import { ControlAuthenticatorStubAdapter, RepoQuerierStubAdapter } from "../adapters/drivens";
import { DashboardApi } from "./dashboard-api";
import { AuthenticatedUser } from "./schemas";

describe("dashboard-api", () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStubAdapter();
    const repoQuerierStub = new RepoQuerierStubAdapter();
    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub, repoQuerierStub
    );
    
    it.concurrent("should login", async () => {
        //Given
        const mockedParams = {
            email: 'ricardotest@gmail.com',
            password: '1234'
        }

        const expectedResult: AuthenticatedUser = {
            id: '1',
            name: 'Ricardo',
            email: 'ricardotest@gmail.com',
            token: 'token',
            refreshToken: 'refreshToken',
            permissions: {
                admin: true,
                user: true
            }
        }
        
        //WHEN
        const result = await dashboardApiMock.login(mockedParams.email, mockedParams.password);

        //THEN
        expect(result).toEqual(expectedResult);
    });
});
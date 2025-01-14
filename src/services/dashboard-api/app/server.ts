import express from "express"
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express"
import { localTRPCCompose } from "./composition-root";

// created for each request
const createContext = () => ({});
const app = express();

app.use(cors())

app.use(
    "http://localhost:400",
    trpcExpress.createExpressMiddleware({
        router: localTRPCCompose().appRouter,
        createContext
    })
)
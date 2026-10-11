import { createApp } from "./app";
import { env } from "./config/env";

const app = createApp();
app.listen(env.port);

console.info(`API is running at ${app.server?.url}`);

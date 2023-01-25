import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";

import "express-async-errors";
import "reflect-metadata";
export const app = express();
let cors = require("cors");
app.use(express.json());
app.use(cors());
appRoutes(app);

app.use(errorMiddleware);

// app.listen(process.env.PORT || 3000);


import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
const app = express();
let cors = require("cors");
app.use(express.json());
app.use(cors());
appRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.use(errorMiddleware);

app.listen(3000);

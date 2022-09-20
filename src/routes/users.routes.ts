import { Router } from "express";
import createUsersController from "../controllers/users/createUsers.controller";
import loginUserController from "../controllers/users/loginUsers.controller";
import schemaValidationMiddleware from "../middlewares/verifySchema.middleware";
import { usersCreateSchema } from "../schemas/users";
import { VerifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import listUsersController from "../controllers/users/listUsers.controller";
import deleteUsersController from "../controllers/users/deleteUsers.controller";
import updateUsersController from "../controllers/users/updateUsers.controller";
const routes = Router();
export const usersRoutes = () => {
  routes.post("/login", loginUserController);
  routes.post(
    "/",
    schemaValidationMiddleware(usersCreateSchema),
    createUsersController
  );
  routes.get("/", VerifyAuthMiddleware, listUsersController);
  routes.patch("/", VerifyAuthMiddleware, updateUsersController);
  routes.delete("/", VerifyAuthMiddleware, deleteUsersController);
  return routes;
};

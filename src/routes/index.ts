import { Express } from "express";
import { contactsRoutes } from "./contacts.routes";
import { usersRoutes } from "./users.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/contacts", contactsRoutes());
};

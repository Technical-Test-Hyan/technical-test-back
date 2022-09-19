import { Router } from "express";
import createContactsController from "../controllers/contacts/createContacts.controller";
import deleteContactsController from "../controllers/contacts/deleteContacts.controller";
import listAllContactsController from "../controllers/contacts/listAllContacts.controller";
import updateContactsController from "../controllers/contacts/updateContacts.controller";
import { VerifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import schemaValidationMiddleware from "../middlewares/verifySchema.middleware";
import { contactsCreateSchema } from "../schemas/contacts";

const routes = Router();

export const contactsRoutes = () => {
  routes.post(
    "/",
    VerifyAuthMiddleware,
    schemaValidationMiddleware(contactsCreateSchema),
    createContactsController
  );
  routes.get("/", VerifyAuthMiddleware, listAllContactsController);
  routes.patch("/:id/", VerifyAuthMiddleware, updateContactsController);
  routes.delete("/:id/", VerifyAuthMiddleware, deleteContactsController);
  return routes;
};

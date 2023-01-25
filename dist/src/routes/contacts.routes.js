"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRoutes = void 0;
const express_1 = require("express");
const createContacts_controller_1 = __importDefault(require("../controllers/contacts/createContacts.controller"));
const deleteContacts_controller_1 = __importDefault(require("../controllers/contacts/deleteContacts.controller"));
const listAllContacts_controller_1 = __importDefault(require("../controllers/contacts/listAllContacts.controller"));
const updateContacts_controller_1 = __importDefault(require("../controllers/contacts/updateContacts.controller"));
const verifyAuth_middleware_1 = require("../middlewares/verifyAuth.middleware");
const verifyOwner_middleware_1 = require("../middlewares/verifyOwner.middleware");
const verifySchema_middleware_1 = __importDefault(require("../middlewares/verifySchema.middleware"));
const contacts_1 = require("../schemas/contacts");
const routes = (0, express_1.Router)();
const contactsRoutes = () => {
    routes.post("/", verifyAuth_middleware_1.VerifyAuthMiddleware, (0, verifySchema_middleware_1.default)(contacts_1.contactsCreateSchema), createContacts_controller_1.default);
    routes.get("/", verifyAuth_middleware_1.VerifyAuthMiddleware, listAllContacts_controller_1.default);
    routes.patch("/:id/", verifyAuth_middleware_1.VerifyAuthMiddleware, verifyOwner_middleware_1.VerifyOwnerMiddleware, updateContacts_controller_1.default);
    routes.delete("/:id/", verifyAuth_middleware_1.VerifyAuthMiddleware, verifyOwner_middleware_1.VerifyOwnerMiddleware, deleteContacts_controller_1.default);
    return routes;
};
exports.contactsRoutes = contactsRoutes;

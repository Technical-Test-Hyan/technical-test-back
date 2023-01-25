"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const contacts_routes_1 = require("./contacts.routes");
const users_routes_1 = require("./users.routes");
const appRoutes = (app) => {
    app.use("/users", (0, users_routes_1.usersRoutes)());
    app.use("/contacts", (0, contacts_routes_1.contactsRoutes)());
};
exports.appRoutes = appRoutes;

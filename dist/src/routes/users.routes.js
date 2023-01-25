"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const createUsers_controller_1 = __importDefault(require("../controllers/users/createUsers.controller"));
const loginUsers_controller_1 = __importDefault(require("../controllers/users/loginUsers.controller"));
const verifySchema_middleware_1 = __importDefault(require("../middlewares/verifySchema.middleware"));
const users_1 = require("../schemas/users");
const verifyAuth_middleware_1 = require("../middlewares/verifyAuth.middleware");
const listUsers_controller_1 = __importDefault(require("../controllers/users/listUsers.controller"));
const deleteUsers_controller_1 = __importDefault(require("../controllers/users/deleteUsers.controller"));
const updateUsers_controller_1 = __importDefault(require("../controllers/users/updateUsers.controller"));
const routes = (0, express_1.Router)();
const usersRoutes = () => {
    routes.post("/login", loginUsers_controller_1.default);
    routes.post("/", (0, verifySchema_middleware_1.default)(users_1.usersCreateSchema), createUsers_controller_1.default);
    routes.get("/", verifyAuth_middleware_1.VerifyAuthMiddleware, listUsers_controller_1.default);
    routes.patch("/", verifyAuth_middleware_1.VerifyAuthMiddleware, updateUsers_controller_1.default);
    routes.delete("/", verifyAuth_middleware_1.VerifyAuthMiddleware, deleteUsers_controller_1.default);
    return routes;
};
exports.usersRoutes = usersRoutes;

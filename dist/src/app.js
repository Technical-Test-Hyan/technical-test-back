"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const error_middleware_1 = require("./middlewares/error.middleware");
const routes_1 = require("./routes");
require("express-async-errors");
require("reflect-metadata");
exports.app = (0, express_1.default)();
let cors = require("cors");
exports.app.use(express_1.default.json());
exports.app.use(cors());
(0, routes_1.appRoutes)(exports.app);
exports.app.use(error_middleware_1.errorMiddleware);
// app.listen(process.env.PORT || 3000);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const appError_1 = require("../errors/appError");
const errorMiddleware = (err, request, response, _) => {
    if (err instanceof appError_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            code: err.statusCode,
            message: err.message,
        });
    }
    console.error(err);
    return response.status(500).json({
        status: "error",
        code: 500,
        message: "Internal server error",
    });
};
exports.errorMiddleware = errorMiddleware;

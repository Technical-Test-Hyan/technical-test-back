"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyAuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const VerifyAuthMiddleware = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        jsonwebtoken_1.default.verify(token, "palavra-chave", (err, decoded) => {
            req.id = decoded.id;
            next();
        });
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};
exports.VerifyAuthMiddleware = VerifyAuthMiddleware;

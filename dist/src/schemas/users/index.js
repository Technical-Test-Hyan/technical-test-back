"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateSchema = void 0;
const yup = __importStar(require("yup"));
exports.usersCreateSchema = yup.object().shape({
    email: yup.string().email("Invalid format").required("Email Required"),
    full_name: yup.string().required("Full Name Required"),
    password: yup
        .string()
        .required("Senha obrigatória")
        .matches(/(?=.*[a-z])/, "Must have one lower case")
        .matches(/(?=.*[A-Z])/, "Must have one upper case")
        .matches(/(?=.*[0-9])/, "Must have one number")
        .matches(/(?=.*[!$*&@#])/, "Must have one special character")
        .min(8, "Must contain at least 8 letters"),
    phone: yup
        .string()
        .required("Phone Required")
        .matches(/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/, "Invalid format, must be like : 00 12345 6789"),
});

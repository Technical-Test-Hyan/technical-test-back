"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateUsers_service_1 = __importDefault(require("../../services/users/updateUsers.service"));
const updateUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    if (Object.keys(data).length == 0) {
        return res.status(400).json({ message: "Type some field to update" });
    }
    const id = req.id;
    yield (0, updateUsers_service_1.default)(id, data);
    return res.status(204).json();
});
exports.default = updateUsersController;

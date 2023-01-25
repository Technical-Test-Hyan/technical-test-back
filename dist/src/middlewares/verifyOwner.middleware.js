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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOwnerMiddleware = void 0;
const users_1 = require("../entities/users");
const data_source_1 = require("../data-source");
const VerifyOwnerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: contact_id } = req.params;
    const id = req.id;
    const userRepository = data_source_1.AppDataSource.getRepository(users_1.Users);
    const user = yield userRepository.findOne({
        where: { id },
        relations: ["contacts"],
    });
    if (!user) {
        return res.status(404).json("User not found");
    }
    const contact = user.contacts.filter((e) => e.id == contact_id);
    if (contact.length == 0) {
        return res.status(404).json({ message: "You don't have permission" });
    }
    next();
});
exports.VerifyOwnerMiddleware = VerifyOwnerMiddleware;

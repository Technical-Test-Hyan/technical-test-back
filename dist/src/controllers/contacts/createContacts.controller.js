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
const createContacts_service_1 = __importDefault(require("../../services/contacts/createContacts.service"));
const createContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const user_id = req.id;
    const new_contacts = yield (0, createContacts_service_1.default)(user_id, data);
    return res.status(201).json(new_contacts);
});
exports.default = createContactsController;

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
const data_source_1 = require("../../data-source");
const contacts_1 = require("../../entities/contacts");
const appError_1 = require("../../errors/appError");
const updateContactsService = (contact_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_1.Contacts);
    const contact = yield contactRepository.findOneBy({ id: contact_id });
    if (!contact) {
        throw new appError_1.AppError(404, "Contact not found");
    }
    yield contactRepository.update(contact_id, data);
    return "Contact updated with success";
});
exports.default = updateContactsService;

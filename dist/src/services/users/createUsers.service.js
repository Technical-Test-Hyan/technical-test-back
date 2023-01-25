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
const data_source_1 = require("../../data-source");
const users_1 = require("../../entities/users");
const appError_1 = require("../../errors/appError");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUsersService = ({ email, full_name, password, phone, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepository = data_source_1.AppDataSource.getRepository(users_1.Users);
        const hashedPassword = bcrypt_1.default.hashSync(password, 10);
        const user = userRepository.create({
            email,
            full_name,
            password: hashedPassword,
            phone,
            created_at: new Date(),
            updated_at: new Date(),
            contacts: [],
        });
        yield userRepository.save(user);
        return user;
    }
    catch (error) {
        throw new appError_1.AppError(409, error.detail);
    }
});
exports.default = createUsersService;

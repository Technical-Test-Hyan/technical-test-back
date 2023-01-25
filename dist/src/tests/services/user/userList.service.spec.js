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
const listUsers_service_1 = __importDefault(require("../../../services/users/listUsers.service"));
const createUsers_service_1 = __importDefault(require("../../../services/users/createUsers.service"));
const data_source_1 = require("../../../data-source");
describe("Create an user returning a hashed password", () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize()
            .then((res) => (connection = res))
            .catch((err) => console.log(err));
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    test("Should list just the owner of account registered", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            email: "hyan@email.com",
            password: "1234Lopes!",
            full_name: "Hyan Lopes de Andrade",
            phone: "24 98150 2226",
        };
        const newUser = yield (0, createUsers_service_1.default)(user);
        const userList = yield (0, listUsers_service_1.default)(newUser.id);
        expect(userList).toEqual(newUser);
    }));
});

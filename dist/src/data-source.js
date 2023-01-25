"use strict";
// import { DataSource } from "typeorm";
// require("dotenv").config();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// export const AppDataSource =
//   process.env.NODE_ENV === "test"
//     ? new DataSource({
//         type: "sqlite",
//         database: ":memory:",
//         entities: ["src/entities/*.ts"],
//         synchronize: true,
//       })
//     : new DataSource({
//         type: "postgres",
//         url: process.env.DATABASE_URL,
//         ssl:
//           process.env.NODE_ENV === "production"
//             ? { rejectUnauthorized: false }
//             : false,
//         synchronize: false,
//         logging: true,
//         entities:
//           process.env.NODE_ENV === "production"
//             ? ["dist/entities/*.js"]
//             : ["src/entities/*.ts"],
//         migrations:
//           process.env.NODE_ENV === "production"
//             ? ["dist/migrations/*.js"]
//             : ["src/migrations/*.ts"],
//       });
const typeorm_1 = require("typeorm");
require("dotenv").config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
    synchronize: false,
    logging: true,
    entities: process.env.NODE_ENV === "production"
        ? ["dist/entities/*.js"]
        : ["src/entities/*.ts"],
    migrations: process.env.NODE_ENV === "production"
        ? ["dist/migrations/*.js"]
        : ["src/migrations/*.ts"],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source initialized");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});

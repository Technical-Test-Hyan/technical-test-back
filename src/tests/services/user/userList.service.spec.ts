import listUsersService from "../../../services/users/listUsers.service";
import createUsersService from "../../../services/users/createUsers.service";
import { DataSource } from "typeorm";

import { AppDataSource } from "../../../data-source";

describe("Create an user returning a hashed password", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => console.log(err));
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should list just the owner of account registered", async () => {
    const user = {
      email: "hyan@email.com",
      password: "1234Lopes!",
      full_name: "Hyan Lopes de Andrade",
      phone: "24 98150 2226",
    };

    const newUser = await createUsersService(user);

    const userList = await listUsersService(newUser.id);

    expect(userList).toEqual(newUser);
  });
});

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

  test("Should returning a hashed password", async () => {
    const user = {
      email: "hyan@email.com",
      password: "1234Lopes!",
      full_name: "Hyan Lopes de Andrade",
      phone: "24 98150 2226",
    };

    const newUser = await createUsersService(user);
  });
});

describe("Testing if when creating a user it returns a list of contacts", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => console.log(err));
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should returning a list of contacts", async () => {
    const user = {
      email: "hyan@email.com",
      password: "1234Lopes!",
      full_name: "Hyan Lopes de Andrade",
      phone: "24 98150 2226",
    };

    const newUser = await createUsersService(user);

    expect(newUser.contacts).toEqual([]);
  });
});

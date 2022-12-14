import { DataSource } from "typeorm";

import { AppDataSource } from "../../../data-source";
import createUsersService from "../../../services/users/createUsers.service";
import createContactsService from "../../../services/contacts/createContacts.service";

describe("Create a contact", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => console.log(err));
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("User can create a contact", async () => {
    const user = {
      email: "hyan@email.com",
      password: "1234Lopes!",
      full_name: "Hyan Lopes de Andrade",
      phone: "24 98150 2226",
    };

    const newUser = await createUsersService(user);

    const contact = await createContactsService(newUser.id, {
      full_name: "Jest test",
      email: "test@email.com",
      phone: "12345678",
    });

    expect(contact.email).toEqual("test@email.com");
  });
});

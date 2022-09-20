import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import { IContact, IContactCreated } from "../../interfaces/contacts";

const createContactsService = async (
  user_id: string,
  { email, full_name, phone, description }: IContact
): Promise<IContactCreated> => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const new_contacts = contactRepository.create({
    email,
    full_name,
    phone,
    user_id,
    description,
  });

  await contactRepository.save(new_contacts);

  return new_contacts;
};
export default createContactsService;

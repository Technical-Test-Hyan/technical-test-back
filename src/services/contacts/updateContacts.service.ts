import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import { AppError } from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/contacts";

const updateContactsService = async (
  contact_id: string,
  data: IContactUpdate
): Promise<string> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactRepository.findOneBy({ id: contact_id });
  if (!contact) {
    throw new AppError(404, "Contact not found");
  }
  await contactRepository.update(contact_id, data);
  return "Contact updated with success";
};
export default updateContactsService;

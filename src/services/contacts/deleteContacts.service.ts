import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import { AppError } from "../../errors/appError";

const deleteContactsService = async (id: string): Promise<string> => {
  const contactsRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactsRepository.findOneBy({ id });
  if (!contact) {
    throw new AppError(404, "Contact not found");
  }
  await contactsRepository.delete(id);

  return "Contact deleted with success";
};
export default deleteContactsService;

import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";
import { IContactCreated } from "../../interfaces/contacts";

const listAllContactsService = async (
  user_id: string
): Promise<IContactCreated[]> => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOne({
    where: { id: user_id },
    relations: ["contacts"],
  });
  if (!user) {
    throw new AppError(404, "User not found");
  }
  return user.contacts;
};
export default listAllContactsService;

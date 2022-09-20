import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";

const updateUserService = async (
  id: string,
  data: IUserUpdate
): Promise<string> => {
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  await userRepository.update(id, data);
  return "User updated with success";
};
export default updateUserService;

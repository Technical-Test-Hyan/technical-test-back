import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";

const deleteUsersService = async (id: string): Promise<string> => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ id });
  if (!user) {
    throw new AppError(404, "User not found");
  }
  await userRepository.delete({ id });
  return "User deleted with success";
};
export default deleteUsersService;

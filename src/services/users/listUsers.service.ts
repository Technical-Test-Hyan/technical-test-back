import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";
import { IUserCreated } from "../../interfaces/users";

const listUsersService = async (id: string): Promise<IUserCreated> => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOne({
    where: { id },
    relations: ["contacts"],
  });
  if (!user) {
    throw new AppError(404, "User not found");
  }
  return user;
};
export default listUsersService;

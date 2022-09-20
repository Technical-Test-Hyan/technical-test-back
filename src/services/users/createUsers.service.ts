import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";
import { IUser, IUserCreated } from "../../interfaces/users";
import bcrypt from "bcrypt";
const createUsersService = async ({
  email,
  full_name,
  password,
  phone,
}: IUser): Promise<IUserCreated> => {
  try {
    const userRepository = AppDataSource.getRepository(Users);
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user: IUserCreated = userRepository.create({
      email,
      full_name,
      password: hashedPassword,
      phone,
      created_at: new Date(),
      updated_at: new Date(),
      contacts: [],
    });

    await userRepository.save(user);

    return user;
  } catch (error: any) {
    throw new AppError(409, error.detail);
  }
};

export default createUsersService;

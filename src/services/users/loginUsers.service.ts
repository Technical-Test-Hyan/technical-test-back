import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";
import { ILogin, ILoginResponse } from "../../interfaces/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const loginUsersService = async ({
  email,
  password,
}: ILogin): Promise<ILoginResponse> => {
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ email });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new AppError(404, "Wrong email and/or password");
  }

  const token = jwt.sign({ id: user.id }, "palavra-chave", { expiresIn: "1d" });

  return { token, user_id: user.id };
};
export default loginUsersService;

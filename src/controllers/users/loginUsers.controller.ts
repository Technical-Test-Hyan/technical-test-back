import { Request, Response } from "express";
import loginUsersService from "../../services/users/loginUsers.service";

const loginUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const token = await loginUsersService(data);
  return res.status(200).json(token);
};
export default loginUserController;

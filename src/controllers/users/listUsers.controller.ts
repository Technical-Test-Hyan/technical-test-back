import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listUsersService from "../../services/users/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  const id = req.id;
  const user = await listUsersService(id);
  return res.status(200).json(instanceToPlain(user));
};
export default listUsersController;

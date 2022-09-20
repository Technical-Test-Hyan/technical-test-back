import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUsersService from "../../services/users/createUsers.service";

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const newUser = await createUsersService(data);
  return res.status(201).json(instanceToPlain(newUser));
};
export default createUsersController;

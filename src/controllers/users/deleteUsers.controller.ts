import { Request, Response } from "express";
import deleteUsersService from "../../services/users/deleteUsers.service";

const deleteUsersController = async (req: Request, res: Response) => {
  const id = req.id;
  await deleteUsersService(id);
  return res.status(204).json();
};

export default deleteUsersController;

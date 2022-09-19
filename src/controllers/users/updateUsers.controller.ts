import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUsers.service";

const updateUsersController = async (req: Request, res: Response) => {
  const data = req.body;
  if (Object.keys(data).length == 0) {
    return res.status(400).json({ message: "Type some field to update" });
  }
  const id = req.id;
  await updateUserService(id, data);
  return res.status(204).json();
};
export default updateUsersController;

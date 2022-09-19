import { Request, Response } from "express";
import deleteContactsService from "../../services/contacts/deleteContacts.service";

const deleteContactsController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteContactsService(id);
  return res.status(204).json();
};
export default deleteContactsController;

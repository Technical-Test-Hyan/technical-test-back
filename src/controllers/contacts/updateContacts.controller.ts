import { Request, Response } from "express";
import updateContactsService from "../../services/contacts/updateContacts.service";

const updateContactsController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  await updateContactsService(id, data);
  return res.status(204).json();
};
export default updateContactsController;

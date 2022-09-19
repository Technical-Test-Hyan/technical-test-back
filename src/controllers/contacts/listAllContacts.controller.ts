import { Request, Response } from "express";
import listAllContactsService from "../../services/contacts/listAllContacts.service";

const listAllContactsController = async (req: Request, res: Response) => {
  const user_id = req.id;
  const contacts = await listAllContactsService(user_id);
  return res.status(200).json(contacts);
};
export default listAllContactsController;

import { Request, Response } from "express";
import createContactsService from "../../services/contacts/createContacts.service";

const createContactsController = async (req: Request, res: Response) => {
  const data = req.body;
  const user_id = req.id;
  const new_contacts = await createContactsService(user_id, data);
  return res.status(201).json(new_contacts);
};
export default createContactsController;

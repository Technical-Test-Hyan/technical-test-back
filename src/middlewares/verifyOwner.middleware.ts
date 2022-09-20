import { Request, Response, NextFunction } from "express";
import { Users } from "../entities/users";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";
export const VerifyOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: contact_id } = req.params;
  const id = req.id;
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOne({
    where: { id },
    relations: ["contacts"],
  });

  if (!user) {
    return res.status(404).json("User not found");
  }

  const contact = user.contacts.filter((e) => e.id == contact_id);

  if (contact.length == 0) {
    return res.status(404).json({ message: "You don't have permission" });
  }
  next();
};

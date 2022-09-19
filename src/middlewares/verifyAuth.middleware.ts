import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const VerifyAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    jwt.verify(token as string, "palavra-chave", (err: any, decoded: any) => {
      req.id = decoded.id;
      next();
    });
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

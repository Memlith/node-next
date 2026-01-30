import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export default class UserController {
  // GET
  static async index(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //POST
  static async create(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // PUT
  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email },
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //DELETE
  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

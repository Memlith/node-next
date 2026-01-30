import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", UserController.index);
userRoutes.post("/", UserController.create);
userRoutes.get("/:id", UserController.show);
userRoutes.put("/:id", UserController.update);
userRoutes.delete("/:id", UserController.delete);

export default userRoutes;

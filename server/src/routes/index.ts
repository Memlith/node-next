import { Router } from "express";
import helloRoute from "./hello.routes";
import userRoutes from "./user.routes";

const routes = Router();

routes.use("/hello", helloRoute);
routes.use("/users", userRoutes);

export default routes;

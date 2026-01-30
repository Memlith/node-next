import { Router, Request, Response } from "express";

const helloRoute = Router();

// rota /hello
helloRoute.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "API Working!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default helloRoute;

import express, { Request, Response } from "express";
import { AuthController } from "../controller/auth.controller";
const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const authController = new AuthController();
    const result = await authController.login(email, password);
    res.json(result);
  } catch (error) {
    res.status(500).send("Error while trying to login, please try again later");
  }
});

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const authController = new AuthController();
    const result = await authController.signup(newUser);
    res.json(result);
  } catch (error) {
    res.status(500).send("Error while trying to sign up, please try again later");
  }
});

export default router;

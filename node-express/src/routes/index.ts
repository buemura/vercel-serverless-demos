import { Router } from "express";
import { userRouter } from "./users";

const router = Router();

router.use("/api", userRouter);

export { router };

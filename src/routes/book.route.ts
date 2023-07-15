import express, { Request, Response } from "express";

const router = express.Router();

router.get("/health", (req: Request, res: Response) => res.send("ok!"));

export default router;

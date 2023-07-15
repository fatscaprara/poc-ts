import express, { Request, Response } from "express";
import { postBook } from "@/controllers/book.controller";

const router = express.Router();

router.get("/health", (req: Request, res: Response) => res.send("ok!"));
router.post("/books", postBook);

export default router;

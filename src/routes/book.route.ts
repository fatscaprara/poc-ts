import express, { Request, Response } from "express";
import { getBooks, postBook } from "@/controllers/book.controller";

const router = express.Router();

router.get("/health", (req: Request, res: Response) => res.send("ok!"));
router.post("/books", postBook);
router.get("/books", getBooks);

export default router;

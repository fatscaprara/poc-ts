import express, { Request, Response } from "express";
import {
  deleteBook,
  getBooks,
  postBook,
  updateBook,
} from "@/controllers/book.controller";

const router = express.Router();

router.get("/health", (req: Request, res: Response) => res.send("ok!"));
router.post("/books", postBook);
router.get("/books", getBooks);
router.delete("/books/:id", deleteBook);
router.put("/books/:id", updateBook);

export default router;

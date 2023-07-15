import httpStatus from "http-status";
import { Request, Response } from "express";
import { BookBody } from "@/protocols/book.protocol";
import bookSchema from "@/schemas/book.schema";
import bookServices from "@/services/book.service";

export async function postBook(req: Request, res: Response) {
  const book = req.body as BookBody;
  const { error } = bookSchema.validate(book);

  if (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  await bookServices.postBook(book);

  res.sendStatus(201);
}

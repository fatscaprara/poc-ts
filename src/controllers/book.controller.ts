import httpStatus from "http-status";
import { Request, Response } from "express";
import { BookBody } from "@/protocols/book.protocol";
import bookSchema from "@/schemas/book.schema";
import bookServices from "@/services/book.service";
import { badRequestError } from "@/errors/errors";

export async function postBook(req: Request, res: Response) {
  const book = req.body as BookBody;
  const { error } = bookSchema.validate(book);

  if (error) {
    throw badRequestError();
  }

  await bookServices.postBook(book);

  res.sendStatus(httpStatus.CREATED);
}

export async function getBooks(req: Request, res: Response) {
  const books = await bookServices.getBooks();

  res.send(books);
}

export async function deleteBook(req: Request, res: Response) {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    throw badRequestError();
  }

  const book = await bookServices.getBookById(parseInt(id));

  await bookServices.deleteBookById(book.id);

  res.sendStatus(httpStatus.NO_CONTENT);
}

export async function updateBook(req: Request, res: Response) {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    throw badRequestError();
  }

  const book = req.body as BookBody;
  const { error } = bookSchema.validate(book);

  if (error) {
    throw badRequestError();
  }

  const bookDB = await bookServices.getBookById(parseInt(id));

  await bookServices.updateBookById(bookDB.id, book);

  res.sendStatus(httpStatus.NO_CONTENT);
}

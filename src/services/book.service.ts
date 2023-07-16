import { notFoundError } from "@/errors/errors";
import { Book, BookBody } from "@/protocols/book.protocol";
import {
  deleteBookByIdDB,
  getAllBooks,
  getBookByIdDB,
  insertBook,
  updateBookByIdDB,
} from "@/repositories/book.repository";

async function postBook(book: BookBody) {
  await insertBook(book);
}

async function getBooks() {
  const result = await getAllBooks();

  return result.rows;
}

async function getBookById(id: number) {
  const book = await getBookByIdDB(id);

  if (!book.rowCount) {
    throw notFoundError();
  }

  return book.rows[0] as Book;
}

async function deleteBookById(id: number) {
  await deleteBookByIdDB(id);
}

async function updateBookById(id: number, book: BookBody) {
  await updateBookByIdDB(id, book);
}

export default {
  postBook,
  getBooks,
  getBookById,
  deleteBookById,
  updateBookById,
};

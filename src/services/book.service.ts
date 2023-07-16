import { BookBody } from "@/protocols/book.protocol";
import { getAllBooks, insertBook } from "@/repositories/book.repository";

async function postBook(book: BookBody) {
  await insertBook(book);
}

async function getBooks() {
  const result = await getAllBooks();

  return result.rows;
}

export default {
  postBook,
  getBooks,
};

import { BookBody } from "@/protocols/book.protocol";
import { insertBook } from "@/repositories/book.repository";

async function postBook(book: BookBody) {
  await insertBook(book);
}

export default {
  postBook,
};

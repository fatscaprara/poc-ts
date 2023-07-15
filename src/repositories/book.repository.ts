import { db } from "@/config/database";
import { BookBody } from "@/protocols/book.protocol";

export function insertBook({ name, description }: BookBody) {
  return db.query(
    `
    INSERT INTO
      books (name, description)
    VALUES
      ($1, $2)
    ;
  `,
    [name, description]
  );
}

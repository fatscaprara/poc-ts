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

export function getAllBooks() {
  return db.query(`
    SELECT
      *
    FROM
      books
    ;
  `);
}

export function getBookByIdDB(id: number) {
  return db.query(
    `
    SELECT
      *
    FROM
      books
    WHERE
      id = $1
    ;
  `,
    [id]
  );
}

export function deleteBookByIdDB(id: number) {
  return db.query(
    `
    DELETE FROM
      books
    WHERE
      id = $1
    ;
  `,
    [id]
  );
}

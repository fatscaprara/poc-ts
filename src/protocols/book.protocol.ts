export type Book = {
  id: number;
  name: string;
  description: string;
};

export type BookBody = Omit<Book, "id">;

import { BookBody } from "@/protocols/book.protocol";
import Joi from "joi";

const bookSchema = Joi.object<BookBody>({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

export default bookSchema;

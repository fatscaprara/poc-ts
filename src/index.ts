import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import bookRouter from "@/routes/book.route";
import errorHandler from "./middlewares/error.middleware";

const server = express();

server.use(cors());
server.use(express.json());
server.use(bookRouter);
server.use(errorHandler);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running in PORT: ${port}`));

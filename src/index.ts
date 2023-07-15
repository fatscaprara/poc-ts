import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import bookRouter from "@/routes/book.route";

const server = express();

server.use(cors());
server.use(express.json());
server.use(bookRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running in PORT: ${port}`));

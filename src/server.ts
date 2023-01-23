import express from "express";
import { getLengthName } from "./controllers/calculatorController.js";

const server = express();

server.get("/lengthName", getLengthName);

server.listen(4000, () => {
  console.log("Server listening in PORT: 4000");
});

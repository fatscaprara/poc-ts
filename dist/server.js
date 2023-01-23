import express from "express";
import { calculatorController } from "./controllers/calculatorController.js";
var server = express();
server.get("/calculator", calculatorController);
server.listen(4000, function () {
    console.log("Server listening in PORT: 4000");
});

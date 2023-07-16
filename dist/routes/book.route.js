"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var book_controller_1 = require("@/controllers/book.controller");
var router = express_1.default.Router();
router.get("/health", function (req, res) { return res.send("ok!"); });
router.post("/books", book_controller_1.postBook);
router.get("/books", book_controller_1.getBooks);
router.delete("/books/:id", book_controller_1.deleteBook);
router.put("/books/:id", book_controller_1.updateBook);
exports.default = router;

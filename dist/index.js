"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var book_route_1 = __importDefault(require("@/routes/book.route"));
var error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(book_route_1.default);
server.use(error_middleware_1.default);
var port = process.env.PORT || 5000;
server.listen(port, function () { return console.log("Server running in PORT: ".concat(port)); });

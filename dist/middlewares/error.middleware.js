"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.type === "not_found") {
        return res.sendStatus(http_status_1.default.NOT_FOUND);
    }
    if (error.type === "bad_request") {
        return res.sendStatus(http_status_1.default.BAD_REQUEST);
    }
    res.sendStatus(http_status_1.default.INTERNAL_SERVER_ERROR);
}
exports.default = errorHandler;

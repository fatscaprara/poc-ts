"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequestError = exports.notFoundError = void 0;
function notFoundError() {
    return {
        type: "not_found",
    };
}
exports.notFoundError = notFoundError;
function badRequestError() {
    return {
        type: "bad_request",
    };
}
exports.badRequestError = badRequestError;

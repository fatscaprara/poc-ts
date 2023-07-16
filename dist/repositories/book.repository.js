"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookByIdDB = exports.deleteBookByIdDB = exports.getBookByIdDB = exports.getAllBooks = exports.insertBook = void 0;
var database_1 = require("@/config/database");
function insertBook(_a) {
    var name = _a.name, description = _a.description;
    return database_1.db.query("\n    INSERT INTO\n      books (name, description)\n    VALUES\n      ($1, $2)\n    ;\n  ", [name, description]);
}
exports.insertBook = insertBook;
function getAllBooks() {
    return database_1.db.query("\n    SELECT\n      *\n    FROM\n      books\n    ORDER BY\n      id\n    ;\n  ");
}
exports.getAllBooks = getAllBooks;
function getBookByIdDB(id) {
    return database_1.db.query("\n    SELECT\n      *\n    FROM\n      books\n    WHERE\n      id = $1\n    ;\n  ", [id]);
}
exports.getBookByIdDB = getBookByIdDB;
function deleteBookByIdDB(id) {
    return database_1.db.query("\n    DELETE FROM\n      books\n    WHERE\n      id = $1\n    ;\n  ", [id]);
}
exports.deleteBookByIdDB = deleteBookByIdDB;
function updateBookByIdDB(id, _a) {
    var name = _a.name, description = _a.description;
    return database_1.db.query("\n    UPDATE\n      books\n    SET\n      name = $1,\n      description = $2\n    WHERE\n      id = $3\n    ;\n  ", [name, description, id]);
}
exports.updateBookByIdDB = updateBookByIdDB;

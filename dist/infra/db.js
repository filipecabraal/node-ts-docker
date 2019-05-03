"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DataBase {
    constructor() {
        this.DataBaseUrl = 'mongodb://link-db/db_portal';
    }
    createConnection() {
        mongoose.connect(this.DataBaseUrl);
    }
}
exports.default = DataBase;

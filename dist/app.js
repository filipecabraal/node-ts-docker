"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./infra/db");
const news_controller_1 = require("./controllers/news-controller");
class StartUp {
    constructor() {
        this.app = express();
        this._dataBase = new db_1.default();
        this._dataBase.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.route('/api/v1/news').get(news_controller_1.default.get);
        this.app.route('/api/v1/news/:id').get(news_controller_1.default.getById);
        this.app.route('/api/v1/news').post(news_controller_1.default.create);
        this.app.route('/api/v1/news/:id').put(news_controller_1.default.update);
        this.app.route('/api/v1/news/:id').delete(news_controller_1.default.delete);
    }
}
exports.default = new StartUp();

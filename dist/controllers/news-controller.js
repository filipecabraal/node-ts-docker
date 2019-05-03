"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const news_services_1 = require("../services/news-services");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class newsController {
    get(req, res) {
        news_services_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        news_services_1.default.getById(req.params.id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        news_services_1.default.create(req.body)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, 'Success!'))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        news_services_1.default.update(req.params.id, req.body)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, `${news.title} updated successfully!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        news_services_1.default.delete(req.params.id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, 'Deleted successfully!'))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new newsController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const news_repository_1 = require("../repositories/news-repository");
class newsService {
    get() {
        return news_repository_1.default.find({});
    }
    getById(_id) {
        return news_repository_1.default.findById(_id);
    }
    create(news) {
        return news_repository_1.default.create(news);
    }
    update(_id, news) {
        return news_repository_1.default.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return news_repository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new newsService();

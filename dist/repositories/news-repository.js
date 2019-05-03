"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const news_1 = require("../models/news");
exports.default = mongoose.model('news', news_1.default);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
let port = process.env.PORT || '3050';
app_1.default.app.listen(port, function () {
    console.log(`Server running on port ${port}...`);
});

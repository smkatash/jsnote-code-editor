"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serve = (port, filename, dir) => {
    console.log('serving traffic on port', port);
    console.log('saving/fetching cells from', filename);
    console.log('the file is in', dir);
};
exports.default = serve;

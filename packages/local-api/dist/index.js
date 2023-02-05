"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const path_1 = __importDefault(require("path"));
const cells_1 = require("./routes/cells");
const serve = (port, filename, dir, useProxy) => {
    const app = (0, express_1.default)();
    app.use((0, cells_1.createCellsRouter)(filename, dir));
    if (useProxy) {
        app.use((0, http_proxy_middleware_1.createProxyMiddleware)({
            target: 'http://127.0.0.1:3000',
            ws: true,
            logLevel: 'silent',
            changeOrigin: true,
        }));
    }
    else {
        const packagePath = require.resolve('@jsnote-smkatash/local-client/build/index.html');
        app.use(express_1.default.static(path_1.default.dirname(packagePath)));
    }
    return new Promise((resolve, reject) => {
        app.listen(port, resolve).on('error', reject);
        console.log('Listening on port', port);
    });
};
exports.default = serve;

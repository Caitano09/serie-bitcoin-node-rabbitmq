"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require("express");
var morgan = require("morgan");
var cors = require("cors");
var candles_1 = require("./routes/candles");
exports.app = express();
exports.app.use(cors());
exports.app.use(express.json());
exports.app.use(morgan('dev'));
exports.app.use('/candles', candles_1.candleRouter);
//# sourceMappingURL=app.js.map
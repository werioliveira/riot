"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv/config');
const express_1 = __importDefault(require("express"));
const PORT = 3000 || process.env.PORT;
const routes_1 = __importDefault(require("./routes"));
const server = express_1.default();
server.use(routes_1.default);
server.listen(PORT, () => { console.log('Running on ', PORT); });

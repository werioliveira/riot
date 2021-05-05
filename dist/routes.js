"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("./class/User");
const route = express_1.Router();
route.use('/:params', User_1.getPlayer);
route.use('/', User_1.index);
exports.default = route;

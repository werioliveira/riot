"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("./class/User");
const route = express_1.Router();
route.use('/:params', User_1.getPlayer);
exports.default = route;

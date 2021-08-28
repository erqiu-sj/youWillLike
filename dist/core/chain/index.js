"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-03 14:21:46
 * @LastEditTime: 2021-07-03 14:22:12
 * @FilePath: /you-will-like/src/core/chain/index.ts
 * @Description: entry
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainOfResponsibilityNext = exports.ChainOfResponsibility = exports.JLocalstorage = exports.JSet = exports.JMap = void 0;
const localstorage_1 = require("./localstoreage/localstorage");
Object.defineProperty(exports, "JLocalstorage", { enumerable: true, get: function () { return localstorage_1.JLocalstorage; } });
const chainOfResponsibility_1 = require("./chainOfResponsibility/chainOfResponsibility");
Object.defineProperty(exports, "ChainOfResponsibility", { enumerable: true, get: function () { return chainOfResponsibility_1.ChainOfResponsibility; } });
Object.defineProperty(exports, "ChainOfResponsibilityNext", { enumerable: true, get: function () { return chainOfResponsibility_1.ChainOfResponsibilityNext; } });
const map_1 = require("./map/map");
Object.defineProperty(exports, "JMap", { enumerable: true, get: function () { return map_1.JMap; } });
const set_1 = require("./set/set");
Object.defineProperty(exports, "JSet", { enumerable: true, get: function () { return set_1.JSet; } });

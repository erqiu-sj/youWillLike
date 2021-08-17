"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategist = exports.stateMode = exports.search = exports.functions = exports.decorators = exports.chain = void 0;
/*
 * @Author: your name
 * @Date: 2021-08-16 12:46:23
 * @LastEditTime: 2021-08-16 12:48:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /you-will-like/src/index.ts
 */
var chain = __importStar(require("./core/chain"));
exports.chain = chain;
var decorators = __importStar(require("./core/decorators"));
exports.decorators = decorators;
var functions = __importStar(require("./core/function"));
exports.functions = functions;
var search = __importStar(require("./core/search"));
exports.search = search;
var stateMode = __importStar(require("./core/stateMode"));
exports.stateMode = stateMode;
var strategist = __importStar(require("./core/strategist"));
exports.strategist = strategist;

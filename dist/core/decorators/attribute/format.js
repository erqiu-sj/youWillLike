"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDayJs = exports.format = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-03 11:18:45
 * @LastEditTime: 2021-07-25 12:21:18
 * @FilePath: /you-will-like/src/core/decorators/attribute/format.ts
 * @Description: 格式化
 */
require("reflect-metadata");
var dayjs_1 = __importDefault(require("dayjs"));
/**
 * @description 格式化属性
 * @param { formatFnTypes } formatFn 函数返回值会是该属性的值
 * @param { P } params 函数的参数
 * @returns
 */
function format(formatFn, params) {
    return function (target, key) {
        var desc = {
            writable: true,
            value: formatFn(params),
        };
        return desc;
    };
}
exports.format = format;
function formatDayJs(date) {
    return function (target, key) {
        var desc = {
            writable: true,
            value: dayjs_1.default(date),
        };
        return desc;
    };
}
exports.formatDayJs = formatDayJs;

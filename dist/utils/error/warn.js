"use strict";
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-22 12:59:38
 * @LastEditTime : 2021-07-22 13:01:01
 * @FilePath     : /you-will-like/src/utils/error/warn.ts
 * @Description  :
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.warn = void 0;
function warn(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    console.warn(message, optionalParams);
}
exports.warn = warn;

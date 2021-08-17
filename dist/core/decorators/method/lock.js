"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lock = void 0;
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-12 12:28:55
 * @LastEditTime: 2021-07-25 12:20:44
 * @FilePath: /you-will-like/src/core/decorators/method/lock.ts
 * @Description  : lock
 */
require("reflect-metadata");
function lock(executionTimes) {
    if (executionTimes === void 0) { executionTimes = 1; }
    return function (target, key, desc) {
        var useFn = desc.value;
        desc.value = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var remainingTimes = Reflect.getMetadata(key, target);
            if (!remainingTimes && remainingTimes !== 0) {
                Reflect.defineMetadata(key, executionTimes, target);
                remainingTimes = Reflect.getMetadata(key, target);
            }
            if (remainingTimes < 1) {
                useFn = undefined;
                Reflect.defineMetadata(key, 0, target);
                return;
            }
            useFn === null || useFn === void 0 ? void 0 : useFn.call.apply(useFn, __spreadArray([this], __read(params)));
            Reflect.defineMetadata(key, remainingTimes - 1, target);
        };
    };
}
exports.lock = lock;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval = exports.TimeOut = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-25 13:13:56
 * @LastEditTime: 2021-07-25 13:30:45
 * @FilePath: /you-will-like/src/core/decorators/method/timer.ts
 * @Description: timer
 */
function TimeOut(time) {
    return (target, key, desc) => {
        const fn = desc.value;
        desc.value = function () {
            return __awaiter(this, arguments, void 0, function* () {
                const timeOutId = setTimeout(yield fn.bind(this, ...arguments, () => {
                    clearTimeout(timeOutId);
                }), time);
            });
        };
    };
}
exports.TimeOut = TimeOut;
function interval(time) {
    return (target, key, desc) => {
        const fn = desc.value;
        desc.value = function () {
            return __awaiter(this, arguments, void 0, function* () {
                const timeOutId = setInterval(yield fn.bind(this, ...arguments, () => {
                    clearInterval(timeOutId);
                }), time);
            });
        };
    };
}
exports.interval = interval;

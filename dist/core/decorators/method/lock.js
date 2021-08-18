"use strict";
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
function lock(executionTimes = 1) {
    return (target, key, desc) => {
        let useFn = desc.value;
        desc.value = function (...params) {
            let remainingTimes = Reflect.getMetadata(key, target);
            if (!remainingTimes && remainingTimes !== 0) {
                Reflect.defineMetadata(key, executionTimes, target);
                remainingTimes = Reflect.getMetadata(key, target);
            }
            if (remainingTimes < 1) {
                useFn = undefined;
                Reflect.defineMetadata(key, 0, target);
                return;
            }
            useFn === null || useFn === void 0 ? void 0 : useFn.call(this, ...params);
            Reflect.defineMetadata(key, remainingTimes - 1, target);
        };
    };
}
exports.lock = lock;

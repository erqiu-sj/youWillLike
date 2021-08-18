"use strict";
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-22 12:56:22
 * @LastEditTime: 2021-07-25 12:27:39
 * @FilePath: /you-will-like/src/utils/property/property.ts
 * @Description  : hasProperty
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProperty = exports.getProperty = exports.hasProperty = void 0;
function hasProperty(object, key, falseCb, trueCb) {
    const falseCallback = falseCb && falseCb;
    const trueCallback = trueCb && trueCb;
    const result = Reflect.has(object, key);
    result ? trueCallback === null || trueCallback === void 0 ? void 0 : trueCallback() : falseCallback === null || falseCallback === void 0 ? void 0 : falseCallback();
    return result;
}
exports.hasProperty = hasProperty;
function getProperty(object, key, falseCb, trueCb) {
    const falseCallback = falseCb && falseCb;
    const trueCallback = trueCb && trueCb;
    const getVal = Reflect.get(object, key);
    getVal ? trueCallback === null || trueCallback === void 0 ? void 0 : trueCallback(getVal) : falseCallback === null || falseCallback === void 0 ? void 0 : falseCallback();
    return getVal;
}
exports.getProperty = getProperty;
function setProperty(object, key, value, skipNulls, falseCb, trueCb) {
    if (skipNulls && value === (null || undefined))
        return false;
    const result = Reflect.set(object, key, value);
    const falseCallback = falseCb && falseCb;
    const trueCallback = trueCb && trueCb;
    result ? trueCallback === null || trueCallback === void 0 ? void 0 : trueCallback() : falseCallback === null || falseCallback === void 0 ? void 0 : falseCallback();
    return result;
}
exports.setProperty = setProperty;

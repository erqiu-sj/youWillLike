"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = exports.replaceObjectProperties = exports.nonEmptyJudgment = void 0;
function nonEmptyJudgment(val, cb) {
    if (val)
        return val;
    return cb(val);
}
exports.nonEmptyJudgment = nonEmptyJudgment;
/**
 * @description 重写对象属性
 * @param { T extends object } contrast 被重写对象的副本
 * @param { keyof T[] } beforeReplacement 被重写对象的key数组
 * @param { string[] } afterReplacement 根据beforeReplacement索引进行重写
 * @returns { T }
 */
function replaceObjectProperties(contrast, beforeReplacement, afterReplacement) {
    if (beforeReplacement.length !== afterReplacement.length)
        throw new Error("The length of the replacement attribute does not want to wait");
    var r = JSON.stringify(contrast);
    beforeReplacement.forEach(function (beforeItem, beforeIndex) {
        return (r = r.replace(new RegExp(beforeItem), afterReplacement[beforeIndex]));
    });
    return JSON.parse(r);
}
exports.replaceObjectProperties = replaceObjectProperties;
/**
 * @description 单例模式
 * @param { Function } fn
 * @returns { ()=>T }
 */
function Singleton(fn) {
    var result = null;
    return function () {
        return result ? result : (result = fn());
    };
}
exports.Singleton = Singleton;

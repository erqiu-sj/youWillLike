"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runNode = exports.runWindows = exports.hasWindows = exports.getWindowOrGlobal = void 0;
/**
 * @description 根据环境环境获取全局对象
 * @param windows
 * @returns
 */
function getWindowOrGlobal() {
    return typeof window === 'undefined' ? global : window;
}
exports.getWindowOrGlobal = getWindowOrGlobal;
function hasWindows() {
    return typeof window === 'undefined' ? false : true;
}
exports.hasWindows = hasWindows;
/**
 * @description 只在window环境运行
 * @param cb
 * @returns
 */
function runWindows(cb) {
    return hasWindows() ? cb() : false;
}
exports.runWindows = runWindows;
/**
 * @description 使函数只在node环境才运行
 * @param cb
 * @returns
 */
function runNode(cb) {
    return hasWindows() ? false : cb();
}
exports.runNode = runNode;

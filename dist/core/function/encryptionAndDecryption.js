"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2021-06-26 22:58:10
 * @LastEditTime: 2021-06-27 12:28:36
 * @FilePath: /you-will-like/src/core/function/encryptionAndDecryption.ts
 * @Description: 加密或解密
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deUnicode = exports.toUnicode = exports.deBase64 = exports.toBase64 = void 0;
/**
 * @description 转base64
 * @param { string } val
 * @returns { string }
 */
function toBase64(val) {
    return window.btoa(val);
}
exports.toBase64 = toBase64;
/**
 * @description 解码base64
 * @param { string } val
 * @returns { string }
 */
function deBase64(val) {
    return window.atob(val);
}
exports.deBase64 = deBase64;
/**
 * @description 转unicode
 * @param { string | number | boolean } val
 * @returns { string }
 */
function toUnicode(val) {
    return window.encodeURIComponent(val);
}
exports.toUnicode = toUnicode;
/**
 * @description 解码unicode
 * @param { string } val value
 * @returns { string }
 */
function deUnicode(val) {
    return window.decodeURIComponent(val);
}
exports.deUnicode = deUnicode;

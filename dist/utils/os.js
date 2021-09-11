"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isiOS = exports.isAndroid = void 0;
let u = navigator.userAgent;
exports.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
exports.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOs = void 0;
const hasWindow_1 = require("./hasWindow");
function getOs() {
    return hasWindow_1.runWindows(() => {
        var _a;
        let u = (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent;
        let isAndroid = (u === null || u === void 0 ? void 0 : u.indexOf('Android')) > -1 || u.indexOf('Adr') > -1; //android终端
        let isiOS = !!(u === null || u === void 0 ? void 0 : u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)); //ios终端
        return { isAndroid, isiOS };
    });
}
exports.getOs = getOs;

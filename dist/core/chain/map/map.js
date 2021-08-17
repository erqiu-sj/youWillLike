"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JMap = void 0;
var JMap = /** @class */ (function () {
    function JMap() {
        this.selfMap = new Map();
    }
    JMap.prototype.clear = function () {
        this.selfMap.clear();
        return this;
    };
    JMap.prototype.delete = function (key) {
        this.selfMap.delete(key);
        return this;
    };
    // @ts-ignore
    JMap.prototype.forEach = function (callbackfn, thisArg) {
        if (thisArg)
            this.selfMap.forEach(callbackfn, thisArg);
        else
            this.selfMap.forEach(callbackfn);
        return this;
    };
    JMap.prototype.get = function (key) {
        return this.selfMap.get(key);
    };
    JMap.prototype.has = function (key) {
        return this.selfMap.has(key);
    };
    JMap.prototype.set = function (key, value) {
        this.selfMap.set(key, value);
        return this;
    };
    // @ts-ignore
    JMap.prototype.return = function () {
        return this.selfMap;
    };
    return JMap;
}());
exports.JMap = JMap;

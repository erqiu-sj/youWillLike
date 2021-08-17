"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSet = void 0;
var JSet = /** @class */ (function () {
    function JSet() {
        this.selfSet = new Set();
    }
    JSet.prototype.add = function (value) {
        this.selfSet.add(value);
        return this;
    };
    JSet.prototype.clear = function () {
        this.selfSet.clear();
        return this;
    };
    JSet.prototype.delete = function (value) {
        this.selfSet.delete(value);
        return this;
    };
    JSet.prototype.forEach = function (cb, thisArgs) {
        if (thisArgs)
            this.selfSet.forEach(cb, thisArgs);
        else
            this.selfSet.forEach(cb);
        return this;
    };
    JSet.prototype.has = function (value) {
        return this.selfSet.has(value);
    };
    JSet.prototype.return = function () {
        return this.selfSet;
    };
    return JSet;
}());
exports.JSet = JSet;

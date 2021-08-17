"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategist = void 0;
var Strategist = /** @class */ (function () {
    function Strategist() {
        this.allStrategies = new Map();
    }
    Strategist.prototype.doesItExist = function (key) {
        var isHas = this.allStrategies.has(key);
        if (!isHas)
            return false;
        if (isHas && typeof this.allStrategies.get(key) !== "function")
            return false;
        return true;
    };
    Strategist.prototype.createStrategy = function (key, fn) {
        if (this.doesItExist(key))
            return this;
        this.allStrategies.set(key, fn);
        return this;
    };
    Strategist.prototype.callPolicy = function (key, args) {
        var _a;
        if (!this.doesItExist(key))
            return false;
        return (_a = this.allStrategies.get(key)) === null || _a === void 0 ? void 0 : _a(args);
    };
    Strategist.prototype.rewritingStrategy = function (key, fn) {
        if (!this.doesItExist(key))
            return this;
        this.allStrategies.set(key, fn);
        return this;
    };
    return Strategist;
}());
exports.Strategist = Strategist;

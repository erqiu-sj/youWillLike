"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategist = void 0;
class Strategist {
    constructor() {
        this.allStrategies = new Map();
    }
    doesItExist(key) {
        const isHas = this.allStrategies.has(key);
        if (!isHas)
            return false;
        if (isHas && typeof this.allStrategies.get(key) !== "function")
            return false;
        return true;
    }
    createStrategy(key, fn) {
        if (this.doesItExist(key))
            return this;
        this.allStrategies.set(key, fn);
        return this;
    }
    callPolicy(key, args) {
        var _a;
        if (!this.doesItExist(key))
            return false;
        return (_a = this.allStrategies.get(key)) === null || _a === void 0 ? void 0 : _a(args);
    }
    rewritingStrategy(key, fn) {
        if (!this.doesItExist(key))
            return this;
        this.allStrategies.set(key, fn);
        return this;
    }
}
exports.Strategist = Strategist;

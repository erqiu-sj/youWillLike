"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _allStrategies;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategist = void 0;
class Strategist {
    constructor() {
        _allStrategies.set(this, void 0);
        __classPrivateFieldSet(this, _allStrategies, new Map());
    }
    doesItExist(key) {
        const isHas = __classPrivateFieldGet(this, _allStrategies).has(key);
        if (!isHas)
            return false;
        if (isHas && typeof __classPrivateFieldGet(this, _allStrategies).get(key) !== "function")
            return false;
        return true;
    }
    createStrategy(key, fn) {
        if (this.doesItExist(key))
            return this;
        __classPrivateFieldGet(this, _allStrategies).set(key, fn);
        return this;
    }
    callPolicy(key, args) {
        var _a;
        if (!this.doesItExist(key))
            return false;
        return (_a = __classPrivateFieldGet(this, _allStrategies).get(key)) === null || _a === void 0 ? void 0 : _a(args);
    }
    rewritingStrategy(key, fn) {
        if (!this.doesItExist(key))
            return this;
        __classPrivateFieldGet(this, _allStrategies).set(key, fn);
        return this;
    }
}
exports.Strategist = Strategist;
_allStrategies = new WeakMap();

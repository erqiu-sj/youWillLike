"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Strategist_allStrategies;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategist = void 0;
class Strategist {
    constructor() {
        _Strategist_allStrategies.set(this, void 0);
        __classPrivateFieldSet(this, _Strategist_allStrategies, new Map(), "f");
    }
    doesItExist(key) {
        const isHas = __classPrivateFieldGet(this, _Strategist_allStrategies, "f").has(key);
        if (!isHas)
            return false;
        if (isHas && typeof __classPrivateFieldGet(this, _Strategist_allStrategies, "f").get(key) !== "function")
            return false;
        return true;
    }
    createStrategy(key, fn) {
        if (this.doesItExist(key))
            return this;
        __classPrivateFieldGet(this, _Strategist_allStrategies, "f").set(key, fn);
        return this;
    }
    callPolicy(key, args) {
        var _a;
        if (!this.doesItExist(key))
            return false;
        return (_a = __classPrivateFieldGet(this, _Strategist_allStrategies, "f").get(key)) === null || _a === void 0 ? void 0 : _a(args);
    }
    rewritingStrategy(key, fn) {
        if (!this.doesItExist(key))
            return this;
        __classPrivateFieldGet(this, _Strategist_allStrategies, "f").set(key, fn);
        return this;
    }
}
exports.Strategist = Strategist;
_Strategist_allStrategies = new WeakMap();

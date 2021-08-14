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
var _JMap_selfMap;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JMap = void 0;
class JMap {
    constructor() {
        _JMap_selfMap.set(this, void 0);
        __classPrivateFieldSet(this, _JMap_selfMap, new Map(), "f");
    }
    clear() {
        __classPrivateFieldGet(this, _JMap_selfMap, "f").clear();
        return this;
    }
    delete(key) {
        __classPrivateFieldGet(this, _JMap_selfMap, "f").delete(key);
        return this;
    }
    // @ts-ignore
    forEach(callbackfn, thisArg) {
        if (thisArg)
            __classPrivateFieldGet(this, _JMap_selfMap, "f").forEach(callbackfn, thisArg);
        else
            __classPrivateFieldGet(this, _JMap_selfMap, "f").forEach(callbackfn);
        return this;
    }
    get(key) {
        return __classPrivateFieldGet(this, _JMap_selfMap, "f").get(key);
    }
    has(key) {
        return __classPrivateFieldGet(this, _JMap_selfMap, "f").has(key);
    }
    set(key, value) {
        __classPrivateFieldGet(this, _JMap_selfMap, "f").set(key, value);
        return this;
    }
    // @ts-ignore
    return() {
        return __classPrivateFieldGet(this, _JMap_selfMap, "f");
    }
}
exports.JMap = JMap;
_JMap_selfMap = new WeakMap();

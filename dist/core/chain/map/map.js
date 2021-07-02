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
var _selfMap;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JMap = void 0;
class JMap {
    constructor() {
        _selfMap.set(this, void 0);
        __classPrivateFieldSet(this, _selfMap, new Map());
    }
    clear() {
        __classPrivateFieldGet(this, _selfMap).clear();
        return this;
    }
    delete(key) {
        __classPrivateFieldGet(this, _selfMap).delete(key);
        return this;
    }
    // @ts-ignore
    forEach(callbackfn, thisArg) {
        if (thisArg)
            __classPrivateFieldGet(this, _selfMap).forEach(callbackfn, thisArg);
        else
            __classPrivateFieldGet(this, _selfMap).forEach(callbackfn);
        return this;
    }
    get(key) {
        return __classPrivateFieldGet(this, _selfMap).get(key);
    }
    has(key) {
        return __classPrivateFieldGet(this, _selfMap).has(key);
    }
    set(key, value) {
        __classPrivateFieldGet(this, _selfMap).set(key, value);
        return this;
    }
    // @ts-ignore
    return() {
        return __classPrivateFieldGet(this, _selfMap);
    }
}
exports.JMap = JMap;
_selfMap = new WeakMap();

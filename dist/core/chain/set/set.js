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
var _selfSet;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSet = void 0;
class JSet {
    constructor() {
        _selfSet.set(this, void 0);
        __classPrivateFieldSet(this, _selfSet, new Set());
    }
    add(value) {
        __classPrivateFieldGet(this, _selfSet).add(value);
        return this;
    }
    clear() {
        __classPrivateFieldGet(this, _selfSet).clear();
        return this;
    }
    delete(value) {
        __classPrivateFieldGet(this, _selfSet).delete(value);
        return this;
    }
    forEach(cb, thisArgs) {
        if (thisArgs)
            __classPrivateFieldGet(this, _selfSet).forEach(cb, thisArgs);
        else
            __classPrivateFieldGet(this, _selfSet).forEach(cb);
        return this;
    }
    has(value) {
        return __classPrivateFieldGet(this, _selfSet).has(value);
    }
    return() {
        return __classPrivateFieldGet(this, _selfSet);
    }
}
exports.JSet = JSet;
_selfSet = new WeakMap();

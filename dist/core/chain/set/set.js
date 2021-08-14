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
var _JSet_selfSet;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSet = void 0;
class JSet {
    constructor() {
        _JSet_selfSet.set(this, void 0);
        __classPrivateFieldSet(this, _JSet_selfSet, new Set(), "f");
    }
    add(value) {
        __classPrivateFieldGet(this, _JSet_selfSet, "f").add(value);
        return this;
    }
    clear() {
        __classPrivateFieldGet(this, _JSet_selfSet, "f").clear();
        return this;
    }
    delete(value) {
        __classPrivateFieldGet(this, _JSet_selfSet, "f").delete(value);
        return this;
    }
    forEach(cb, thisArgs) {
        if (thisArgs)
            __classPrivateFieldGet(this, _JSet_selfSet, "f").forEach(cb, thisArgs);
        else
            __classPrivateFieldGet(this, _JSet_selfSet, "f").forEach(cb);
        return this;
    }
    has(value) {
        return __classPrivateFieldGet(this, _JSet_selfSet, "f").has(value);
    }
    return() {
        return __classPrivateFieldGet(this, _JSet_selfSet, "f");
    }
}
exports.JSet = JSet;
_JSet_selfSet = new WeakMap();

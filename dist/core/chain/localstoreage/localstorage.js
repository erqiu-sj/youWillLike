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
var _JLocalstorage_store;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JLocalstorage = void 0;
class JLocalstorage {
    constructor() {
        _JLocalstorage_store.set(this, void 0);
        __classPrivateFieldSet(this, _JLocalstorage_store, localStorage, "f");
    }
    clear() {
        return __classPrivateFieldGet(this, _JLocalstorage_store, "f").clear();
    }
    key(index) {
        return __classPrivateFieldGet(this, _JLocalstorage_store, "f").key(index);
    }
    getItem(key) {
        return __classPrivateFieldGet(this, _JLocalstorage_store, "f").getItem(key);
    }
    setItem(key, value) {
        __classPrivateFieldGet(this, _JLocalstorage_store, "f").setItem(key, value);
        return this;
    }
    removeItem(key) {
        __classPrivateFieldGet(this, _JLocalstorage_store, "f").removeItem(key);
        return this;
    }
}
exports.JLocalstorage = JLocalstorage;
_JLocalstorage_store = new WeakMap();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JLocalstorage = void 0;
class JLocalstorage {
    constructor() {
        this.store = localStorage;
    }
    clear() {
        return this.store.clear();
    }
    key(index) {
        return this.store.key(index);
    }
    getItem(key) {
        return this.store.getItem(key);
    }
    setItem(key, value) {
        this.store.setItem(key, value);
        return this;
    }
    removeItem(key) {
        this.store.removeItem(key);
        return this;
    }
}
exports.JLocalstorage = JLocalstorage;

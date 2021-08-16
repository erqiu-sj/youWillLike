"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JMap = void 0;
class JMap {
    constructor() {
        this.selfMap = new Map();
    }
    clear() {
        this.selfMap.clear();
        return this;
    }
    delete(key) {
        this.selfMap.delete(key);
        return this;
    }
    // @ts-ignore
    forEach(callbackfn, thisArg) {
        if (thisArg)
            this.selfMap.forEach(callbackfn, thisArg);
        else
            this.selfMap.forEach(callbackfn);
        return this;
    }
    get(key) {
        return this.selfMap.get(key);
    }
    has(key) {
        return this.selfMap.has(key);
    }
    set(key, value) {
        this.selfMap.set(key, value);
        return this;
    }
    // @ts-ignore
    return() {
        return this.selfMap;
    }
}
exports.JMap = JMap;

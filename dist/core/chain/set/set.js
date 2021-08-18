"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSet = void 0;
class JSet {
    constructor() {
        this.selfSet = new Set();
    }
    add(value) {
        this.selfSet.add(value);
        return this;
    }
    clear() {
        this.selfSet.clear();
        return this;
    }
    delete(value) {
        this.selfSet.delete(value);
        return this;
    }
    forEach(cb, thisArgs) {
        if (thisArgs)
            this.selfSet.forEach(cb, thisArgs);
        else
            this.selfSet.forEach(cb);
        return this;
    }
    has(value) {
        return this.selfSet.has(value);
    }
    return() {
        return this.selfSet;
    }
}
exports.JSet = JSet;

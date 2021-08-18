"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBase = void 0;
class searchBase {
    initialize(value) {
        if (!value)
            return false;
        return true;
    }
    has(obj, key) {
        return Reflect.has(obj, key);
    }
}
exports.searchBase = searchBase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBase = void 0;
var searchBase = /** @class */ (function () {
    function searchBase() {
    }
    searchBase.prototype.initialize = function (value) {
        if (!value)
            return false;
        return true;
    };
    searchBase.prototype.has = function (obj, key) {
        return Reflect.has(obj, key);
    };
    return searchBase;
}());
exports.searchBase = searchBase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JLocalstorage = void 0;
var JLocalstorage = /** @class */ (function () {
    function JLocalstorage() {
        this.store = localStorage;
    }
    JLocalstorage.prototype.clear = function () {
        return this.store.clear();
    };
    JLocalstorage.prototype.key = function (index) {
        return this.store.key(index);
    };
    JLocalstorage.prototype.getItem = function (key) {
        return this.store.getItem(key);
    };
    JLocalstorage.prototype.setItem = function (key, value) {
        this.store.setItem(key, value);
        return this;
    };
    JLocalstorage.prototype.removeItem = function (key) {
        this.store.removeItem(key);
        return this;
    };
    return JLocalstorage;
}());
exports.JLocalstorage = JLocalstorage;

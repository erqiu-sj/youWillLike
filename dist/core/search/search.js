"use strict";
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-24 12:51:33
 * @LastEditTime : 2021-06-25 19:11:56
 * @FilePath     : /you-will-like/src/core/search/search.ts
 * @Description  :
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHandler = void 0;
var SearchHandler = /** @class */ (function () {
    function SearchHandler(initParams) {
        this.database = initParams;
        this.databaseBackup = initParams;
        // @ts-ignore
        this.handlerList = new Map();
    }
    /**
     * @description 初始化参数
     * @param { T } val
     */
    SearchHandler.prototype.initialization = function (val) {
        if (typeof val === 'function') {
            this.database = val();
            this.databaseBackup = val();
            return this;
        }
        this.database = val;
        this.databaseBackup = val;
        return this;
    };
    /**
     * @description 清空字段值
     * @param { T } val 可选 ， val不为空则赋值给参数
     */
    SearchHandler.prototype.resetField = function (val) {
        if (val) {
            this.database = val;
            return this;
        }
        this.database = this.databaseBackup;
        return this;
    };
    SearchHandler.prototype.registerHandler = function (key, fn) {
        var _a, _b;
        if ((_a = this === null || this === void 0 ? void 0 : this.handlerList) === null || _a === void 0 ? void 0 : _a.has(key))
            return this;
        (_b = this === null || this === void 0 ? void 0 : this.handlerList) === null || _b === void 0 ? void 0 : _b.set(key, fn);
        return this;
    };
    SearchHandler.prototype.transferHandler = function (key) {
        var _a;
        if (!((_a = this === null || this === void 0 ? void 0 : this.handlerList) === null || _a === void 0 ? void 0 : _a.has(key)))
            throw new Error("\u60A8\u5E76\u6CA1\u6709\u5B9A\u4E49" + key + "\u76F8\u5173\u5904\u7406\u51FD\u6570");
        this.handlerList.get(key)({ add: this.addNewField, edit: this.rewriteField, delete: this.deleteField });
        return this;
    };
    SearchHandler.prototype.rewriteField = function (key, val) {
        if (!Reflect.has(this.database, key))
            return this;
        Reflect.set(this.database, key, val);
        Reflect.set(this.databaseBackup, key, val);
        return this;
    };
    SearchHandler.prototype.addNewField = function (key, val) {
        if (!Reflect.has(this.database, key)) {
            Reflect.set(this.database, key, val);
            Reflect.set(this.databaseBackup, key, val);
        }
        return this;
    };
    SearchHandler.prototype.deleteField = function (key) {
        if (!Reflect.has(this.database, key))
            return this;
        Reflect.deleteProperty(this.database, key);
        Reflect.deleteProperty(this.databaseBackup, key);
        return this;
    };
    SearchHandler.prototype.returnParams = function () {
        return this.database;
    };
    return SearchHandler;
}());
exports.SearchHandler = SearchHandler;

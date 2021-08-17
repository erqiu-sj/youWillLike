"use strict";
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-24 12:51:33
 * @LastEditTime: 2021-06-26 00:14:04
 * @FilePath: /you-will-like/src/core/search/search.ts
 * @Description  :
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHandler = void 0;
var searchBase_1 = require("./searchBase");
var SearchHandler = /** @class */ (function (_super) {
    __extends(SearchHandler, _super);
    function SearchHandler(initParams) {
        var _this = _super.call(this) || this;
        _this.database = initParams;
        _this.databaseBackup = initParams;
        // @ts-ignore
        _this.handlerList = new Map();
        return _this;
    }
    /**
     * @description 是否初始化
     */
    SearchHandler.prototype.initializeVal = function () {
        // 初始化
        if (!_super.prototype.initialize.call(this, this.database)) {
            this.database = {};
            this.databaseBackup = {};
        }
    };
    /**
     * @description 初始化参数
     * @param { T } val
     */
    SearchHandler.prototype.initialization = function (val) {
        if (typeof val === "function") {
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
    SearchHandler.prototype.transferHandler = function (key, val) {
        var _a, _b;
        if (!((_a = this === null || this === void 0 ? void 0 : this.handlerList) === null || _a === void 0 ? void 0 : _a.has(key)))
            throw new Error("\u60A8\u5E76\u6CA1\u6709\u5B9A\u4E49" + key + "\u76F8\u5173\u5904\u7406\u51FD\u6570");
        (_b = this.handlerList.get(key)) === null || _b === void 0 ? void 0 : _b({
            add: this.addNewField.bind(this),
            edit: this.rewriteField.bind(this),
            remove: this.deleteField.bind(this),
            has: this.has.bind(this),
            value: val,
        });
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
}(searchBase_1.searchBase));
exports.SearchHandler = SearchHandler;

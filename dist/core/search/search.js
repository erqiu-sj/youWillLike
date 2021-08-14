"use strict";
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-24 12:51:33
 * @LastEditTime: 2021-06-26 00:14:04
 * @FilePath: /you-will-like/src/core/search/search.ts
 * @Description  :
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHandler = void 0;
const searchBase_1 = require("./searchBase");
class SearchHandler extends searchBase_1.searchBase {
    constructor(initParams) {
        super();
        this.database = initParams;
        this.databaseBackup = initParams;
        // @ts-ignore
        this.handlerList = new Map();
    }
    /**
     * @description 是否初始化
     */
    initializeVal() {
        // 初始化
        if (!super.initialize(this.database)) {
            this.database = {};
            this.databaseBackup = {};
        }
    }
    /**
     * @description 初始化参数
     * @param { T } val
     */
    initialization(val) {
        if (typeof val === "function") {
            this.database = val();
            this.databaseBackup = val();
            return this;
        }
        this.database = val;
        this.databaseBackup = val;
        return this;
    }
    /**
     * @description 清空字段值
     * @param { T } val 可选 ， val不为空则赋值给参数
     */
    resetField(val) {
        if (val) {
            this.database = val;
            return this;
        }
        this.database = this.databaseBackup;
        return this;
    }
    registerHandler(key, fn) {
        var _a, _b;
        if ((_a = this === null || this === void 0 ? void 0 : this.handlerList) === null || _a === void 0 ? void 0 : _a.has(key))
            return this;
        (_b = this === null || this === void 0 ? void 0 : this.handlerList) === null || _b === void 0 ? void 0 : _b.set(key, fn);
        return this;
    }
    transferHandler(key, val) {
        var _a, _b;
        if (!((_a = this === null || this === void 0 ? void 0 : this.handlerList) === null || _a === void 0 ? void 0 : _a.has(key)))
            throw new Error(`您并没有定义${key}相关处理函数`);
        (_b = this.handlerList.get(key)) === null || _b === void 0 ? void 0 : _b({
            add: this.addNewField.bind(this),
            edit: this.rewriteField.bind(this),
            remove: this.deleteField.bind(this),
            has: this.has.bind(this),
            value: val,
        });
        return this;
    }
    rewriteField(key, val) {
        if (!Reflect.has(this.database, key))
            return this;
        Reflect.set(this.database, key, val);
        Reflect.set(this.databaseBackup, key, val);
        return this;
    }
    addNewField(key, val) {
        if (!Reflect.has(this.database, key)) {
            Reflect.set(this.database, key, val);
            Reflect.set(this.databaseBackup, key, val);
        }
        return this;
    }
    deleteField(key) {
        if (!Reflect.has(this.database, key))
            return this;
        Reflect.deleteProperty(this.database, key);
        Reflect.deleteProperty(this.databaseBackup, key);
        return this;
    }
    returnParams() {
        return this.database;
    }
}
exports.SearchHandler = SearchHandler;

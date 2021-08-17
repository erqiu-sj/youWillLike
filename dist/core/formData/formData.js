"use strict";
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-25 12:06:43
 * @LastEditTime : 2021-06-28 14:29:12
 * @FilePath     : /you-will-like/src/core/formData/formData.ts
 * @Description  : formData
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataHandler = void 0;
var FormDataHandler = /** @class */ (function () {
    function FormDataHandler() {
        this.formData = new FormData();
    }
    FormDataHandler.prototype.append = function (name, value, fileName) {
        if (fileName)
            this.formData.append(name, value, fileName);
        else
            this.formData.append(name, value);
        return this;
    };
    FormDataHandler.prototype.delete = function (name) {
        this.formData.delete(name);
        return this;
    };
    FormDataHandler.prototype.get = function (name) {
        return this.formData.get(name);
    };
    FormDataHandler.prototype.getAll = function (name) {
        return this.formData.getAll(name);
    };
    FormDataHandler.prototype.has = function (name) {
        return this.formData.has(name);
    };
    FormDataHandler.prototype.set = function (name, value, fileName) {
        if (fileName)
            this.formData.set(name, value, fileName);
        else
            this.formData.set(name, value);
        return this;
    };
    FormDataHandler.prototype.forEach = function (callbackFn, thisArg) {
        if (thisArg)
            this.formData.forEach(callbackFn, thisArg);
        else
            this.formData.forEach(callbackFn);
        return this;
    };
    FormDataHandler.prototype.return = function () {
        return this.formData;
    };
    return FormDataHandler;
}());
exports.FormDataHandler = FormDataHandler;

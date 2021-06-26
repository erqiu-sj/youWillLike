"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataHandler = void 0;
var FormDataHandler = /** @class */ (function () {
    function FormDataHandler() {
        this.formData = new FormData();
    }
    FormDataHandler.prototype.append = function (name, value, fileName) {
        this.formData.append(name, value, fileName);
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
        this.formData.set(name, value, fileName);
        return this;
    };
    FormDataHandler.prototype.forEach = function (callbackFn, thisArg) {
        this.formData.forEach(callbackFn, thisArg);
        return this;
    };
    return FormDataHandler;
}());
exports.FormDataHandler = FormDataHandler;

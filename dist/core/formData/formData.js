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
class FormDataHandler {
    constructor() {
        this.formData = new FormData();
    }
    append(name, value, fileName) {
        if (fileName)
            this.formData.append(name, value, fileName);
        else
            this.formData.append(name, value);
        return this;
    }
    delete(name) {
        this.formData.delete(name);
        return this;
    }
    get(name) {
        return this.formData.get(name);
    }
    getAll(name) {
        return this.formData.getAll(name);
    }
    has(name) {
        return this.formData.has(name);
    }
    set(name, value, fileName) {
        if (fileName)
            this.formData.set(name, value, fileName);
        else
            this.formData.set(name, value);
        return this;
    }
    forEach(callbackFn, thisArg) {
        if (thisArg)
            this.formData.forEach(callbackFn, thisArg);
        else
            this.formData.forEach(callbackFn);
        return this;
    }
    return() {
        return this.formData;
    }
}
exports.FormDataHandler = FormDataHandler;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataHandler = void 0;
class FormDataHandler {
    constructor() {
        this.formData = new FormData();
    }
    append(name, value, fileName) {
        this.formData.append(name, value, fileName);
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
        this.formData.set(name, value, fileName);
        return this;
    }
    forEach(callbackFn, thisArg) {
        this.formData.forEach(callbackFn, thisArg);
        return this;
    }
}
exports.FormDataHandler = FormDataHandler;

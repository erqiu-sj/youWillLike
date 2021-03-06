"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrorPromiseJSONParse = exports.catchErrorPromise = exports.catchErrorJSONParse = exports.catchError = exports.SynchronizationAwaitError = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:50:19
 * @LastEditTime: 2021-08-16 13:01:19
 * @FilePath: /you-will-like/src/core/decorators/catch/methodCatch.ts
 * @Description: methodCatch
 */
// import { SynchronizationAwaitError } from "synchronizationawaiterror";
function SynchronizationAwaitError(promise, beautifyReturnValue, errorCaptured) {
    return promise
        .then((result) => {
        return [null, beautifyReturnValue ? beautifyReturnValue(result) : result];
    })
        .catch((causeOfError) => {
        if (errorCaptured)
            return [Object.assign(causeOfError, errorCaptured), null];
        return [causeOfError, null];
    });
}
exports.SynchronizationAwaitError = SynchronizationAwaitError;
/**
 * @description 将错误字符串传入回调
 * @param { catchErrorCb } cb
 * @returns
 */
function catchError(cb) {
    return function (_, key, desc) {
        const fn = desc.value;
        desc.value = function () {
            try {
                return fn === null || fn === void 0 ? void 0 : fn(...arguments);
            }
            catch (e) {
                cb((e === null || e === void 0 ? void 0 : e.message) || e);
            }
        };
    };
}
exports.catchError = catchError;
/**
 * @description 将错误json转为对象,传入回调
 * @param { catchErrorCb } cb  回调函数
 * @returns { any }
 */
function catchErrorJSONParse(cb) {
    return function (_, key, desc) {
        const fn = desc.value;
        desc.value = function () {
            try {
                return fn === null || fn === void 0 ? void 0 : fn(...arguments);
            }
            catch (e) {
                cb((e === null || e === void 0 ? void 0 : e.message) ? JSON.parse(e === null || e === void 0 ? void 0 : e.message) : JSON.parse(e));
            }
        };
    };
}
exports.catchErrorJSONParse = catchErrorJSONParse;
function catchErrorPromise(cb) {
    return function (_, key, desc) {
        const fn = desc.value;
        desc.value = function () {
            return __awaiter(this, arguments, void 0, function* () {
                const [err, res] = yield SynchronizationAwaitError(fn(...arguments));
                if (err)
                    cb(err);
                return res;
            });
        };
    };
}
exports.catchErrorPromise = catchErrorPromise;
function catchErrorPromiseJSONParse(cb) {
    return function (_, key, desc) {
        const fn = desc.value;
        desc.value = function () {
            return __awaiter(this, arguments, void 0, function* () {
                const [err, res] = yield SynchronizationAwaitError(fn(...arguments));
                if (err)
                    cb(JSON.parse(err));
                return res;
            });
        };
    };
}
exports.catchErrorPromiseJSONParse = catchErrorPromiseJSONParse;

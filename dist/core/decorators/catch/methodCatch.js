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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
        .then(function (result) {
        return [null, beautifyReturnValue ? beautifyReturnValue(result) : result];
    })
        .catch(function (causeOfError) {
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
        var fn = desc.value;
        desc.value = function () {
            try {
                return fn === null || fn === void 0 ? void 0 : fn.apply(void 0, __spreadArray([], __read(arguments)));
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
        var fn = desc.value;
        desc.value = function () {
            try {
                return fn === null || fn === void 0 ? void 0 : fn.apply(void 0, __spreadArray([], __read(arguments)));
            }
            catch (e) {
                cb((e === null || e === void 0 ? void 0 : e.message) ? JSON.parse(e === null || e === void 0 ? void 0 : e.message) : JSON.parse(e));
            }
        };
    };
}
exports.catchErrorJSONParse = catchErrorJSONParse;
/**
 * @description 你不应该往这个装饰器传入任何形参，因为 arguments 无法再异步函数中获取
 * @param { catchErrorCb } cb 错误回调
 * @returns { any }
 */
function catchErrorPromise(cb) {
    return function (_, key, desc) {
        var fn = desc.value;
        var args = arguments;
        desc.value = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, err, res;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, SynchronizationAwaitError(fn.apply(void 0, __spreadArray([], __read(args))))];
                        case 1:
                            _a = __read.apply(void 0, [_b.sent(), 2]), err = _a[0], res = _a[1];
                            if (err)
                                cb(err);
                            return [2 /*return*/, res];
                    }
                });
            });
        };
    };
}
exports.catchErrorPromise = catchErrorPromise;
/**
 * @description 你不应该往这个装饰器传入任何形参，因为 arguments 无法再异步函数中获取
 * @param { catchErrorCb } cb 错误回调
 * @returns { any }
 */
function catchErrorPromiseJSONParse(cb) {
    return function (_, key, desc) {
        var fn = desc.value;
        var args = arguments;
        desc.value = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, err, res;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, SynchronizationAwaitError(
                            // //@ts-ignor
                            fn.apply(void 0, __spreadArray([], __read(args))))];
                        case 1:
                            _a = __read.apply(void 0, [_b.sent(), 2]), err = _a[0], res = _a[1];
                            if (err)
                                cb(JSON.parse(err));
                            return [2 /*return*/, res];
                    }
                });
            });
        };
    };
}
exports.catchErrorPromiseJSONParse = catchErrorPromiseJSONParse;

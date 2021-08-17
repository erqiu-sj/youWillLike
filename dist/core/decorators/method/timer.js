"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-25 13:13:56
 * @LastEditTime: 2021-07-25 13:30:45
 * @FilePath: /you-will-like/src/core/decorators/method/timer.ts
 * @Description: timer
 */
function TimeOut(time) {
    return function (target, key, desc) {
        var fn = desc.value;
        desc.value = function () {
            var timeOutId = setTimeout(fn.bind.apply(fn, __spreadArray(__spreadArray([this], __read(arguments)), [function () {
                    clearTimeout(timeOutId);
                }])), time);
        };
    };
}
function interval(time) {
    return function (target, key, desc) {
        var fn = desc.value;
        desc.value = function () {
            var timeOutId = setInterval(fn.bind.apply(fn, __spreadArray(__spreadArray([this], __read(arguments)), [function () {
                    clearInterval(timeOutId);
                }])), time);
        };
    };
}
var T = /** @class */ (function () {
    function T() {
        this.a = 1;
    }
    T.prototype.s = function (n, two, t) {
        console.log(n, two, "what", this.a);
        t === null || t === void 0 ? void 0 : t();
    };
    __decorate([
        interval(1000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Function]),
        __metadata("design:returntype", void 0)
    ], T.prototype, "s", null);
    return T;
}());
new T().s(1, 2);

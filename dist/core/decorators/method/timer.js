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
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-25 13:13:56
 * @LastEditTime: 2021-07-25 13:30:45
 * @FilePath: /you-will-like/src/core/decorators/method/timer.ts
 * @Description: timer
 */
function TimeOut(time) {
    return (target, key, desc) => {
        const fn = desc.value;
        desc.value = function () {
            const timeOutId = setTimeout(fn.bind(this, ...arguments, () => {
                clearTimeout(timeOutId);
            }), time);
        };
    };
}
function interval(time) {
    return (target, key, desc) => {
        const fn = desc.value;
        desc.value = function () {
            const timeOutId = setInterval(fn.bind(this, ...arguments, () => {
                clearInterval(timeOutId);
            }), time);
        };
    };
}
class T {
    constructor() {
        this.a = 1;
    }
    s(n, two, t) {
        console.log(n, two, "what", this.a);
        t === null || t === void 0 ? void 0 : t();
    }
}
__decorate([
    interval(1000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Function]),
    __metadata("design:returntype", void 0)
], T.prototype, "s", null);
new T().s(1, 2);

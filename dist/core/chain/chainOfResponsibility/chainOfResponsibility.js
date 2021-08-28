"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainOfResponsibility = exports.ChainOfResponsibilityNext = void 0;
/**
 * @description 强制执行下一次任务
 */
function ChainOfResponsibilityNext() {
    this.loopExecution();
}
exports.ChainOfResponsibilityNext = ChainOfResponsibilityNext;
/**
 *  @description 责任链模式
 */
class ChainOfResponsibility {
    constructor(fn, params) {
        this.fn = fn;
        this.taskList = [];
        this.parameter = params;
    }
    dispatch(params) {
        var _a, _b;
        if (params)
            this.editParams(params);
        const ret = (_a = this.fn) === null || _a === void 0 ? void 0 : _a.call(this, this.parameter);
        if (!((_b = this.taskList) === null || _b === void 0 ? void 0 : _b.length))
            return ret;
        // ret返回值不为true
        if (!ret)
            return ret;
        // @ts-ignore
        this.loopExecution();
        return ret;
    }
    loopExecution() {
        var _a, _b;
        const cycleCondition = (_b = (_a = this.taskList) === null || _a === void 0 ? void 0 : _a.shift()) === null || _b === void 0 ? void 0 : _b.call(this, this.parameter);
        if (cycleCondition) {
            this.loopExecution();
        }
    }
    addChain(fn) {
        var _a;
        (_a = this.taskList) === null || _a === void 0 ? void 0 : _a.push(fn);
        return this;
    }
    editParams(params) {
        this.parameter = params;
    }
}
exports.ChainOfResponsibility = ChainOfResponsibility;
function A(num) {
    console.log(1, num);
    return '1';
}
function B(num) {
    console.log(2, num);
    // @ts-ignore
    ChainOfResponsibilityNext.call(this);
    return false;
}
function C(num) {
    console.log('3', num);
    return false;
}
const re = new ChainOfResponsibility(B, 1).addChain(C).addChain(A);
re.dispatch(2);

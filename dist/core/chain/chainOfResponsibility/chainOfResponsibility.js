"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainOfResponsibility = exports.StopBackwardExecution = exports.ChainOfResponsibilityNext = void 0;
/**
 * @description 强制执行下一次任务
 */
function ChainOfResponsibilityNext(params) {
    this.loopExecution(params);
}
exports.ChainOfResponsibilityNext = ChainOfResponsibilityNext;
/**
 * @description 停止向下执行,可执行返回值
 */
function StopBackwardExecution(retVal) {
    this.stopDuty(retVal);
}
exports.StopBackwardExecution = StopBackwardExecution;
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
        return this.loopExecution();
    }
    loopExecution(rewrite) {
        var _a, _b;
        const cycleCondition = (_b = (_a = this.taskList) === null || _a === void 0 ? void 0 : _a.shift()) === null || _b === void 0 ? void 0 : _b.call(this, rewrite || this.parameter);
        if (this.customReturnValue)
            return this.customReturnValue;
        // 判断函数返回值是否为false, false则终止
        if (cycleCondition) {
            this.loopExecution(rewrite);
        }
    }
    /**
     * @description 停止职责
     */
    stopDuty(retVal) {
        this.customReturnValue = retVal;
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

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-21 12:40:25
 * @LastEditTime: 2021-07-26 21:26:55
 * @FilePath: /you-will-like/src/core/stateMode/executionScheduling.ts
 * @Description  : simpleStateMachine
 */
var baseStateMachine_1 = require("./baseStateMachine");
var utils_1 = require("./utils");
var executionScheduling = /** @class */ (function (_super) {
    __extends(executionScheduling, _super);
    function executionScheduling(stateInstance, executionQueueParameters, stateOptions) {
        return _super.call(this, stateInstance, executionQueueParameters, stateOptions) || this;
    }
    executionScheduling.prototype.run = function () {
        var _this = this;
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", function () { return _this.schedulingInstantiation(); }, function () { return _this.scheduleNotInstantiated(); }, function () { return _this.scheduleNotInstantiated(); });
        return this;
    };
    /**
     * @description 调度未实例化
     */
    executionScheduling.prototype.scheduleNotInstantiated = function () {
        var _a, _b, _c, _d;
        var instance = null;
        if ((_a = this.executionQueue.get(this.currentState)) === null || _a === void 0 ? void 0 : _a.initialization) {
            instance = (_b = this.executionQueue.get(this.currentState)) === null || _b === void 0 ? void 0 : _b.fn;
        }
        else {
            var curFn = (_c = this.executionQueue.get(this.currentState)) === null || _c === void 0 ? void 0 : _c.fn;
            var curParams = (_d = this.executionQueue.get(this.currentState)) === null || _d === void 0 ? void 0 : _d.params;
            // 没有初始化
            instance = Reflect.construct(curFn, curParams);
            this.executionQueue.set(this.currentState, {
                fn: instance,
                params: curParams,
                initialization: true,
            });
        }
        instance.run();
        this.setStateCurrentState(instance.setState(this.currentState));
        instance = null;
    };
    /**
     * @description 调度实例化
     */
    executionScheduling.prototype.schedulingInstantiation = function () {
        var _a, _b;
        (_a = this.instanceExecutionQueue.get(this.currentState)) === null || _a === void 0 ? void 0 : _a.run();
        this.setStateCurrentState((_b = this.instanceExecutionQueue
            .get(this.currentState)) === null || _b === void 0 ? void 0 : _b.setState(this.currentState));
    };
    return executionScheduling;
}(baseStateMachine_1.BaseStateMachine));
exports.default = executionScheduling;

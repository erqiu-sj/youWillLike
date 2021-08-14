"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-21 12:40:25
 * @LastEditTime: 2021-07-26 21:26:55
 * @FilePath: /you-will-like/src/core/stateMode/executionScheduling.ts
 * @Description  : simpleStateMachine
 */
const baseStateMachine_1 = require("./baseStateMachine");
const utils_1 = require("./utils");
class executionScheduling extends baseStateMachine_1.BaseStateMachine {
    constructor(stateInstance, executionQueueParameters, stateOptions) {
        super(stateInstance, executionQueueParameters, stateOptions);
    }
    run() {
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", () => this.schedulingInstantiation(), () => this.scheduleNotInstantiated(), () => this.scheduleNotInstantiated());
        return this;
    }
    /**
     * @description 调度未实例化
     */
    scheduleNotInstantiated() {
        var _a, _b, _c, _d;
        let instance = null;
        if ((_a = this.executionQueue.get(this.currentState)) === null || _a === void 0 ? void 0 : _a.initialization) {
            instance = (_b = this.executionQueue.get(this.currentState)) === null || _b === void 0 ? void 0 : _b.fn;
        }
        else {
            const curFn = (_c = this.executionQueue.get(this.currentState)) === null || _c === void 0 ? void 0 : _c.fn;
            const curParams = (_d = this.executionQueue.get(this.currentState)) === null || _d === void 0 ? void 0 : _d.params;
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
    }
    /**
     * @description 调度实例化
     */
    schedulingInstantiation() {
        var _a, _b;
        (_a = this.instanceExecutionQueue.get(this.currentState)) === null || _a === void 0 ? void 0 : _a.run();
        this.setStateCurrentState((_b = this.instanceExecutionQueue
            .get(this.currentState)) === null || _b === void 0 ? void 0 : _b.setState(this.currentState));
    }
}
exports.default = executionScheduling;

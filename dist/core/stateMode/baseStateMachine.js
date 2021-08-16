"use strict";
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-21 12:47:17
 * @LastEditTime: 2021-08-16 12:33:03
 * @FilePath: /you-will-like/src/core/stateMode/baseStateMachine.ts
 * @Description  : baseStateMachine
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStateMachine = void 0;
const index_1 = require("../../utils/property/index");
const warn_1 = require("../../utils/error/warn");
const utils_1 = require("./utils");
const const_1 = require("./const");
/**
 * @class BaseStateMachine
 * @description 该class只处理配置调度相关
 */
class BaseStateMachine {
    constructor(stateInstance, executionQueueParameters, stateOptions) {
        this.currentState = 0;
        this.executionQueue = new Map(); // 执行队列  未实例化
        this.instanceExecutionQueue = new Map(); // 执行队列 实例化
        this.executionQueueParameters = []; // 执行队列参数
        this.stateInstance = [];
        this.options = {};
        this.stateInstance = stateInstance;
        this.executionQueueParameters = executionQueueParameters || [];
        this.options = stateOptions || {};
        stateOptions && this.parseOptios(stateOptions);
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", () => this.initializeNow(), () => this.onDemandInitialization(), () => this.onDemandInitialization());
    }
    /**
     * @description 按需初始化
     */
    onDemandInitialization() {
        this.stateInstance.forEach((instance, instanceIndex) => this.waitingForInstance({
            fn: instance,
            params: this.executionQueueParameters[instanceIndex],
            initialization: false,
        }));
    }
    /**
     * @description 立即初始化
     */
    initializeNow() {
        // 立即初始化需要检查 执行队列参数,并且实例长度 === 执行队列参数长度
        if (this.executionQueueParameters.length !== this.stateInstance.length)
            throw new Error("The instance list should be the same length as the strength parameter list");
        this.stateInstance.forEach((instanceItem, instanceIndex) => this.instantiatedState(instanceItem, this.executionQueueParameters[instanceIndex]));
    }
    /**
     * @description 解析options
     */
    parseOptios(stateOptions) {
        const options = {
            initializationMode: utils_1.optionPriority(stateOptions, "initialization", [
                "initialization",
                "onDemandInitialization",
            ]),
            currentState: stateOptions.currentState,
        };
        this.options = options;
        this.currentState = this.options.currentState;
    }
    /**
     * @description 修改当前currentState
     * @param currentState
     * @returns { BaseStateMachine }
     */
    setStateCurrentState(currentState) {
        this.currentState = currentState;
        return this;
    }
    /**
     * @description 新增状态实
     * @param { Function & dispatchAbstract } fn
     * @param { ArrayLike<any> }  params
     * @returns { this }
     */
    addState(fn, params) {
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", () => this.instantiatedState(fn, params), () => this.waitingForInstance({ fn, params, initialization: false }), () => this.waitingForInstance({ fn, params, initialization: false }));
        return this;
    }
    /**
     * @description 实例化状态
     * @param { Function & dispatchAbstract } instance
     * @param { ArrayLike<any> } params
     * @return { void }
     */
    instantiatedState(instance, params) {
        index_1.hasProperty(instance, const_1.CURRENT_STATE, () => {
            warn_1.warn(`${instance.name} Please check if the function has ${const_1.CURRENT_STATE} static property!`);
        }, () => {
            this.instanceExecutionQueue.set(index_1.getProperty(instance, const_1.CURRENT_STATE), Reflect.construct(instance, params));
        });
    }
    /**
     * @description 等待实例化
     * @param { { fn: Function & dispatchAbstract ,params: ArrayLike<any> ,initialization: boolean } } instance
     * @return { void }
     */
    waitingForInstance(instance) {
        // @ts-ignore
        index_1.hasProperty(instance.fn, const_1.CURRENT_STATE, () => warn_1.warn(`${instance.fn.name} Please check if the function has ${const_1.CURRENT_STATE} static property!`), () => this.executionQueue.set(index_1.getProperty(instance.fn, const_1.CURRENT_STATE), {
            fn: instance.fn,
            params: instance.params,
            initialization: false,
        }));
    }
    /**
     * @description 为已存在的实例修改参数
     * @param { string | number } curState 根据实例的curState寻找实例
     * @param { ArrayLike<any> } params 实例参数
     * @returns { this }
     */
    modifyInstanceParameters(curState, params) {
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", () => {
            if (!this.instanceExecutionQueue.has(curState))
                throw new Error("Cannot assign parameters to a non-existent instance");
            this.instanceExecutionQueue.set(curState, Reflect.construct(this.instanceExecutionQueue.get(curState), params));
        }, () => {
            if (!this.executionQueue.has(curState))
                throw new Error("Cannot assign parameters to a non-existent instance");
            this.executionQueue.set(curState, {
                fn: this.executionQueue.get(curState).fn,
                params,
                initialization: false,
            });
        }, () => {
            if (!this.executionQueue.has(curState))
                throw new Error("Cannot assign parameters to a non-existent instance");
            this.executionQueue.set(curState, {
                fn: this.executionQueue.get(curState).fn,
                params,
                initialization: false,
            });
        });
        return this;
    }
    /**
     * @description 删除实例
     * @param { string | number } curState 根据实例的curState删除实例
     * @returns { this }
     */
    deleteInstance(curState) {
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", () => this.instanceExecutionQueue.delete(curState), () => this.executionQueue.delete(curState), () => this.executionQueue.delete(curState));
        return this;
    }
    /**
     * @description 销毁所有实例
     */
    destroy() {
        this.executionQueue.clear();
        this.instanceExecutionQueue.clear();
    }
}
exports.BaseStateMachine = BaseStateMachine;

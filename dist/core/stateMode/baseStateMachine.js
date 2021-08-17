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
var index_1 = require("../../utils/property/index");
var warn_1 = require("../../utils/error/warn");
var utils_1 = require("./utils");
var const_1 = require("./const");
/**
 * @class BaseStateMachine
 * @description 该class只处理配置调度相关
 */
var BaseStateMachine = /** @class */ (function () {
    function BaseStateMachine(stateInstance, executionQueueParameters, stateOptions) {
        var _this = this;
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
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", function () { return _this.initializeNow(); }, function () { return _this.onDemandInitialization(); }, function () { return _this.onDemandInitialization(); });
    }
    /**
     * @description 按需初始化
     */
    BaseStateMachine.prototype.onDemandInitialization = function () {
        var _this = this;
        this.stateInstance.forEach(function (instance, instanceIndex) {
            return _this.waitingForInstance({
                fn: instance,
                params: _this.executionQueueParameters[instanceIndex],
                initialization: false,
            });
        });
    };
    /**
     * @description 立即初始化
     */
    BaseStateMachine.prototype.initializeNow = function () {
        var _this = this;
        // 立即初始化需要检查 执行队列参数,并且实例长度 === 执行队列参数长度
        if (this.executionQueueParameters.length !== this.stateInstance.length)
            throw new Error("The instance list should be the same length as the strength parameter list");
        this.stateInstance.forEach(function (instanceItem, instanceIndex) {
            return _this.instantiatedState(instanceItem, _this.executionQueueParameters[instanceIndex]);
        });
    };
    /**
     * @description 解析options
     */
    BaseStateMachine.prototype.parseOptios = function (stateOptions) {
        var options = {
            initializationMode: utils_1.optionPriority(stateOptions, "initialization", [
                "initialization",
                "onDemandInitialization",
            ]),
            currentState: stateOptions.currentState,
        };
        this.options = options;
        this.currentState = this.options.currentState;
    };
    /**
     * @description 修改当前currentState
     * @param currentState
     * @returns { BaseStateMachine }
     */
    BaseStateMachine.prototype.setStateCurrentState = function (currentState) {
        this.currentState = currentState;
        return this;
    };
    /**
     * @description 新增状态实
     * @param { Function & dispatchAbstract } fn
     * @param { ArrayLike<any> }  params
     * @returns { this }
     */
    BaseStateMachine.prototype.addState = function (fn, params) {
        var _this = this;
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", function () { return _this.instantiatedState(fn, params); }, function () { return _this.waitingForInstance({ fn: fn, params: params, initialization: false }); }, function () { return _this.waitingForInstance({ fn: fn, params: params, initialization: false }); });
        return this;
    };
    /**
     * @description 实例化状态
     * @param { Function & dispatchAbstract } instance
     * @param { ArrayLike<any> } params
     * @return { void }
     */
    BaseStateMachine.prototype.instantiatedState = function (instance, params) {
        var _this = this;
        index_1.hasProperty(instance, const_1.CURRENT_STATE, function () {
            warn_1.warn(instance.name + " Please check if the function has " + const_1.CURRENT_STATE + " static property!");
        }, function () {
            _this.instanceExecutionQueue.set(index_1.getProperty(instance, const_1.CURRENT_STATE), Reflect.construct(instance, params));
        });
    };
    /**
     * @description 等待实例化
     * @param { { fn: Function & dispatchAbstract ,params: ArrayLike<any> ,initialization: boolean } } instance
     * @return { void }
     */
    BaseStateMachine.prototype.waitingForInstance = function (instance) {
        var _this = this;
        // @ts-ignore
        index_1.hasProperty(instance.fn, const_1.CURRENT_STATE, function () {
            return warn_1.warn(instance.fn.name + " Please check if the function has " + const_1.CURRENT_STATE + " static property!");
        }, function () {
            return _this.executionQueue.set(index_1.getProperty(instance.fn, const_1.CURRENT_STATE), {
                fn: instance.fn,
                params: instance.params,
                initialization: false,
            });
        });
    };
    /**
     * @description 为已存在的实例修改参数
     * @param { string | number } curState 根据实例的curState寻找实例
     * @param { ArrayLike<any> } params 实例参数
     * @returns { this }
     */
    BaseStateMachine.prototype.modifyInstanceParameters = function (curState, params) {
        var _this = this;
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", function () {
            if (!_this.instanceExecutionQueue.has(curState))
                throw new Error("Cannot assign parameters to a non-existent instance");
            _this.instanceExecutionQueue.set(curState, Reflect.construct(_this.instanceExecutionQueue.get(curState), params));
        }, function () {
            if (!_this.executionQueue.has(curState))
                throw new Error("Cannot assign parameters to a non-existent instance");
            _this.executionQueue.set(curState, {
                fn: _this.executionQueue.get(curState).fn,
                params: params,
                initialization: false,
            });
        }, function () {
            if (!_this.executionQueue.has(curState))
                throw new Error("Cannot assign parameters to a non-existent instance");
            _this.executionQueue.set(curState, {
                fn: _this.executionQueue.get(curState).fn,
                params: params,
                initialization: false,
            });
        });
        return this;
    };
    /**
     * @description 删除实例
     * @param { string | number } curState 根据实例的curState删除实例
     * @returns { this }
     */
    BaseStateMachine.prototype.deleteInstance = function (curState) {
        var _this = this;
        utils_1.optionHasThisValue(this.options, "initializationMode", "initialization", "onDemandInitialization", function () { return _this.instanceExecutionQueue.delete(curState); }, function () { return _this.executionQueue.delete(curState); }, function () { return _this.executionQueue.delete(curState); });
        return this;
    };
    /**
     * @description 销毁所有实例
     */
    BaseStateMachine.prototype.destroy = function () {
        this.executionQueue.clear();
        this.instanceExecutionQueue.clear();
    };
    return BaseStateMachine;
}());
exports.BaseStateMachine = BaseStateMachine;

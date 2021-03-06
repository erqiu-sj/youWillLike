/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-21 12:47:17
 * @LastEditTime: 2021-08-16 12:33:03
 * @FilePath: /you-will-like/src/core/stateMode/baseStateMachine.ts
 * @Description  : baseStateMachine
 */

import { property } from '../../utils/index'
import { warn } from '../../utils/warn'
import { optionPriority, optionHasThisValue } from './utils'
import type { stateModeUserOptions, stateModeOptions, dispatchAbstract } from './types'
import { CURRENT_STATE } from './const'

/**
 * @class BaseStateMachine
 * @description 该class只处理配置调度相关
 */
export class BaseStateMachine {
  currentState: string | number = 0
  protected executionQueue = new Map<
    string | number,
    {
      fn: Function & dispatchAbstract
      params: ArrayLike<any>
      initialization: boolean
    }
  >() // 执行队列  未实例化
  protected instanceExecutionQueue = new Map<string | number, Function & dispatchAbstract>() // 执行队列 实例化
  protected executionQueueParameters: ArrayLike<any>[] = [] // 执行队列参数
  protected stateInstance: (Function & dispatchAbstract)[] = []
  protected options: {} | stateModeOptions = {}
  constructor(stateInstance: (Function & dispatchAbstract)[], executionQueueParameters: ArrayLike<any>[], stateOptions: stateModeUserOptions) {
    this.stateInstance = stateInstance
    this.executionQueueParameters = executionQueueParameters || []
    this.options = stateOptions || {}
    stateOptions && this.parseOptios(stateOptions)
    optionHasThisValue(
      this.options,
      'initializationMode',
      'initialization',
      'onDemandInitialization',
      () => this.initializeNow(),
      () => this.onDemandInitialization(),
      () => this.onDemandInitialization()
    )
  }
  /**
   * @description 按需初始化
   */
  protected onDemandInitialization() {
    this.stateInstance.forEach((instance, instanceIndex) =>
      this.waitingForInstance({
        fn: instance,
        params: this.executionQueueParameters[instanceIndex],
        initialization: false,
      })
    )
  }
  /**
   * @description 立即初始化
   */
  protected initializeNow() {
    // 立即初始化需要检查 执行队列参数,并且实例长度 === 执行队列参数长度
    if (this.executionQueueParameters.length !== this.stateInstance.length) throw new Error('The instance list should be the same length as the strength parameter list')
    this.stateInstance.forEach((instanceItem, instanceIndex) => this.instantiatedState(instanceItem, this.executionQueueParameters[instanceIndex]))
  }
  /**
   * @description 解析options
   */
  private parseOptios(stateOptions: stateModeUserOptions) {
    const options: stateModeOptions = {
      initializationMode: optionPriority(stateOptions, 'initialization', ['initialization', 'onDemandInitialization']),
      currentState: stateOptions.currentState,
    }
    this.options = options
    this.currentState = (this.options as stateModeOptions).currentState
  }
  /**
   * @description 修改当前currentState
   * @param currentState
   * @returns { BaseStateMachine }
   */
  protected setStateCurrentState(currentState: string | number): this {
    this.currentState = currentState
    return this
  }
  /**
   * @description 新增状态实
   * @param { Function & dispatchAbstract } fn
   * @param { ArrayLike<any> }  params
   * @returns { this }
   */
  addState<T>(fn: Function & dispatchAbstract, params: ArrayLike<T>): this {
    optionHasThisValue(
      this.options,
      'initializationMode',
      'initialization',
      'onDemandInitialization',
      () => this.instantiatedState(fn, params),
      () => this.waitingForInstance({ fn, params, initialization: false }),
      () => this.waitingForInstance({ fn, params, initialization: false })
    )
    return this
  }
  /**
   * @description 实例化状态
   * @param { Function & dispatchAbstract } instance
   * @param { ArrayLike<any> } params
   * @return { void }
   */
  private instantiatedState(instance: Function & dispatchAbstract, params: ArrayLike<any>): void {
    property.hasProperty(
      instance,
      CURRENT_STATE,
      () => {
        warn(`${instance.name} Please check if the function has ${CURRENT_STATE} static property!`)
      },
      () => {
        this.instanceExecutionQueue.set(property.getProperty(instance, CURRENT_STATE), Reflect.construct(instance, params))
      }
    )
  }
  /**
   * @description 等待实例化
   * @param { { fn: Function & dispatchAbstract ,params: ArrayLike<any> ,initialization: boolean } } instance
   * @return { void }
   */
  private waitingForInstance(instance: { fn: Function & dispatchAbstract; params: ArrayLike<any>; initialization: boolean }): void {
    // @ts-ignore
    hasProperty(
      instance.fn,
      CURRENT_STATE,
      () => warn(`${instance.fn.name} Please check if the function has ${CURRENT_STATE} static property!`),
      () =>
        this.executionQueue.set(property.getProperty(instance.fn, CURRENT_STATE), {
          fn: instance.fn,
          params: instance.params,
          initialization: false,
        })
    )
  }

  /**
   * @description 为已存在的实例修改参数
   * @param { string | number } curState 根据实例的curState寻找实例
   * @param { ArrayLike<any> } params 实例参数
   * @returns { this }
   */
  modifyInstanceParameters(curState: string | number, params: ArrayLike<any>): this {
    optionHasThisValue(
      this.options,
      'initializationMode',
      'initialization',
      'onDemandInitialization',
      () => {
        if (!this.instanceExecutionQueue.has(curState)) throw new Error('Cannot assign parameters to a non-existent instance')
        this.instanceExecutionQueue.set(curState, Reflect.construct(this.instanceExecutionQueue.get(curState) as Function, params))
      },
      () => {
        if (!this.executionQueue.has(curState)) throw new Error('Cannot assign parameters to a non-existent instance')
        this.executionQueue.set(curState, {
          fn: this.executionQueue.get(curState)!.fn,
          params,
          initialization: false,
        })
      },
      () => {
        if (!this.executionQueue.has(curState)) throw new Error('Cannot assign parameters to a non-existent instance')
        this.executionQueue.set(curState, {
          fn: this.executionQueue.get(curState)!.fn,
          params,
          initialization: false,
        })
      }
    )
    return this
  }
  /**
   * @description 删除实例
   * @param { string | number } curState 根据实例的curState删除实例
   * @returns { this }
   */
  deleteInstance(curState: string | number): this {
    optionHasThisValue(
      this.options,
      'initializationMode',
      'initialization',
      'onDemandInitialization',
      () => this.instanceExecutionQueue.delete(curState),
      () => this.executionQueue.delete(curState),
      () => this.executionQueue.delete(curState)
    )
    return this
  }
  /**
   * @description 销毁所有实例
   */
  destroy(): void {
    this.executionQueue.clear()
    this.instanceExecutionQueue.clear()
  }
}

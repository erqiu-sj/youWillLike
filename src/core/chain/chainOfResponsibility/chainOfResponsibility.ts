import { CURRENT_STATE } from '@src/core/stateMode/const'
import { ChainOfResponsibilityTypes } from './type'
/**
 * @description 强制执行下一次任务
 */
export function ChainOfResponsibilityNext<R>(params?: R) {
  this.loopExecution(params)
}
/**
 * @description 停止向下执行,可执行返回值
 */
export function StopBackwardExecution(retVal?: unknown) {
  this.stopDuty(retVal)
}
/**
 *  @description 责任链模式
 */
export class ChainOfResponsibility<T> implements ChainOfResponsibilityTypes {
  private readonly fn: Function | undefined
  private taskList: Function[] | undefined
  private parameter: T | undefined
  private customReturnValue: unknown // 终止责任链时的返回值,可有可无
  constructor(fn: Function, params?: T) {
    this.fn = fn
    this.taskList = []
    this.parameter = params
  }

  dispatch<R>(params?: T): R {
    if (params) this.editParams(params)
    const ret = this.fn?.call(this, this.parameter)
    if (!this.taskList?.length) return ret
    // ret返回值不为true
    if (!ret) return ret
    return this.loopExecution() as R
  }
  private loopExecution<R>(rewrite?: R) {
    const cycleCondition = this.taskList?.shift()?.call(this, rewrite || this.parameter)
    if (this.customReturnValue) return this.customReturnValue
    // 判断函数返回值是否为false, false则终止
    if (cycleCondition) {
      this.loopExecution(rewrite)
    }
  }
  /**
   * @description 停止职责
   */
  private stopDuty(retVal: unknown) {
    this.customReturnValue = retVal
  }

  addChain(fn: Function) {
    this.taskList?.push(fn)
    return this
  }
  editParams(params: T) {
    this.parameter = params
  }
}

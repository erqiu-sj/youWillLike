import { ChainOfResponsibilityTypes } from './type'
/**
 * @description 强制执行下一次任务
 */
export function ChainOfResponsibilityNext<R>(params?: R) {
  this.loopExecution(params)
}
/**
 *  @description 责任链模式
 */
export class ChainOfResponsibility<T> implements ChainOfResponsibilityTypes {
  private readonly fn: Function | undefined
  private taskList: Function[] | undefined
  private parameter: T | undefined
  constructor(fn: Function, params?: T) {
    this.fn = fn
    this.taskList = []
    this.parameter = params
  }

  dispatch(params?: T) {
    if (params) this.editParams(params)
    const ret = this.fn?.call(this, this.parameter)
    if (!this.taskList?.length) return ret
    // ret返回值不为true
    if (!ret) return ret
    this.loopExecution()
    return ret
  }
  private loopExecution<R>(rewrite?: R) {
    const cycleCondition = this.taskList?.shift()?.call(this, rewrite || this.parameter)
    if (cycleCondition) {
      this.loopExecution(rewrite)
    }
  }
  addChain(fn: Function) {
    this.taskList?.push(fn)
    return this
  }
  editParams(params: T) {
    this.parameter = params
  }
}

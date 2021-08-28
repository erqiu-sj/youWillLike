import { ChainOfResponsibilityTypes } from './type'
/**
 * @description 强制执行下一次任务
 */
export function ChainOfResponsibilityNext() {
  this.loopExecution()
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
    // @ts-ignore
    this.loopExecution()
    return ret
  }
  private loopExecution() {
    const cycleCondition = this.taskList?.shift()?.call(this, this.parameter)
    if (cycleCondition) {
      this.loopExecution()
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
function A(num: number) {
  console.log(1, num)
  return '1'
}
function B(num: number) {
  console.log(2, num)
  // @ts-ignore
  ChainOfResponsibilityNext.call(this)
  return false
}
function C(num: number) {
  console.log('3', num)
  return false
}
const re = new ChainOfResponsibility(B, 1).addChain(C).addChain(A)
re.dispatch(2)

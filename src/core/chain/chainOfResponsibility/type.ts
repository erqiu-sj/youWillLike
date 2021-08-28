export abstract class ChainOfResponsibilityTypes {
  abstract dispatch(): void // 开始派发任务
  abstract addChain(fn: Function): void // 新增职责
}

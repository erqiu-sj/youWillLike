/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-21 12:40:25
 * @LastEditTime : 2021-07-23 16:21:24
 * @FilePath     : /you-will-like/src/core/stateMode/executionScheduling.ts
 * @Description  : simpleStateMachine
 */
import { BaseStateMachine } from "./baseStateMachine";
import { stateModeUserOptions, dispatchAbstract } from "./types";
import { optionHasThisValue } from "./utils";
export default class executionScheduling extends BaseStateMachine {
  constructor(
    stateInstance: (Function & dispatchAbstract)[],
    executionQueueParameters: ArrayLike<any>[],
    stateOptions: stateModeUserOptions
  ) {
    super(stateInstance, executionQueueParameters, stateOptions);
  }
  run(): this {
    optionHasThisValue(
      this.options,
      "initializationMode",
      "initialization",
      "onDemandInitialization",
      () => this.schedulingInstantiation(),
      () => this.scheduleNotInstantiated(),
      () => this.scheduleNotInstantiated()
    );
    return this;
  }
  /**
   * @description 调度未实例化
   */
  protected scheduleNotInstantiated() {
    const curFn = this.executionQueue.get(this.currentState)?.fn;
    console.log(curFn, this.currentState)
    const curParams = this.executionQueue.get(this.currentState)?.params;
    let instance = null;
    if (this.executionQueue.get(this.currentState)?.initialization) {
      instance = this.executionQueue.get(this.currentState)?.fn;
    } else {
      // 没有初始化
      instance = Reflect.construct(
        curFn as Function,
        curParams as ArrayLike<any>
      );
      this.executionQueue.set(this.currentState, {
        fn: instance,
        params: curParams as ArrayLike<any>,
        initialization: true,
      });
    }

    (instance as dispatchAbstract).run();
    this.setStateCurrentState(
      (instance as dispatchAbstract).setState(this.currentState) as
      | string
      | number
    );
    instance = null;
    // console.log(this.executionQueue.get(this.currentState));
  }
  /**
   * @description 调度实例化
   */
  protected schedulingInstantiation() {
    this.instanceExecutionQueue.get(this.currentState)?.run();
    this.setStateCurrentState(
      this.instanceExecutionQueue
        .get(this.currentState)
        ?.setState(this.currentState) as string | number
    );
  }
}
class B implements dispatchAbstract {
  static currentState = "currentState";
  constructor(num: number) {
    console.log(num);
  }
  setState(curState: string | number): string | number {
    return "currentStateNext";
  }
  run() {
    console.log("我执行了B");
  }
}
class A implements dispatchAbstract {
  static currentState = "currentStateNext";
  setState(curState: string | number): string | number {
    return "currentState";
  }
  run() {
    console.log("我执行了A");
  }
}
new executionScheduling([B as any], [[1]], {
  currentState: "currentState",
  onDemandInitialization: true,
})
  .run().addState(A as any, []).run()
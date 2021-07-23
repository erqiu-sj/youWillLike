# stateMode

> This is a state machine, you must define `static currentState`, `run function`, `setState function` in the declared `class`

> 这是一个状态机，你必须在声明的`class`中定义`static currentState`，`run`函数 ，`setState`函数

## static currentState

> Represents the state represented by this `class`, and the subsequent state machine is scheduled according to the state

> 代表了这个`class`代表的状态，后续状态机根据状态进行调度

## run

> You need to place confident logic here. Calling `setState` in `run` doesn’t work.

>  你需要自信的逻辑放在此处，在`run`中调用`setState`手不管用的

## setState

> You must return a state and let the state machine execute the `class` defined by this state next time

> 你必须return一个状态，让状态机下一次执行根据此状态定义的`class`

```typescript
import { stateMode } from 'youwilllike/core/stateMode'
import type { dispatchAbstract } from 'youwilllike/core/stateMode'

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
new stateMode([B], [[1]], {
  currentState: "currentState",
  onDemandInitialization: true,
})
  .run().addState(A, []).run()

  /**
   * 1
   * 我执行了B
   * 我执行了A
   * /
```

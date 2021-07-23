/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-21 12:28:39
 * @LastEditTime: 2021-07-22 22:49:29
 * @FilePath: /you-will-like/src/core/stateMode/types.ts
 * @Description  :
 */

type SimpleTypes =
  | string
  | number
  | boolean
  | undefined
  | null
  | bigint
  | symbol;

export interface stateModeUserOptions {
  // 用户选项
  onDemandInitialization?: boolean; // 按需初始化
  initialization?: boolean; // 立即初始化
  currentState: string | number; // 当前状态
}
export interface stateModeOptions {
  // 执行选项 value 为 key
  initializationMode: keyof stateModeUserOptions;
  currentState: stateModeUserOptions["currentState"];
}
// 用户需要实现的借口
export interface dispatchAbstract {
  run(): void;
  setState(curState: stateModeUserOptions["currentState"]): string | number;
}

export abstract class stateModeSimpleAbstract {
  abstract addSimpleState(val: SimpleTypes): this | never; // 新增一个简单类型状态
  abstract removeSimpleState(val: SimpleTypes): this | never; // 删除一个简单类型状态
}

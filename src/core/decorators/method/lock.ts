/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-12 12:28:55
 * @LastEditTime: 2021-07-25 12:20:44
 * @FilePath: /you-will-like/src/core/decorators/method/lock.ts
 * @Description  : lock
 */
import "reflect-metadata";
export function lock(executionTimes: number = 1): Function {
  return (
    target: Function,
    key: string,
    desc: TypedPropertyDescriptor<Function>
  ) => {
    let useFn: undefined | Function = desc.value;
    desc.value = function (...params: unknown[]) {
      let remainingTimes = Reflect.getMetadata(key, target);
      if (!remainingTimes && remainingTimes !== 0) {
        Reflect.defineMetadata(key, executionTimes, target);
        remainingTimes = Reflect.getMetadata(key, target);
      }
      if (remainingTimes < 1) {
        useFn = undefined;
        Reflect.defineMetadata(key, 0, target);
        return;
      }
      useFn?.call(this, ...params);
      Reflect.defineMetadata(key, remainingTimes - 1, target);
    };
  };
}

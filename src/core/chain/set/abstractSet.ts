/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:29:01
 * @LastEditTime: 2021-07-02 23:31:50
 * @FilePath: /you-will-like/src/core/chain/set/abstractSet.ts
 * @Description: abstractSet
 */

export abstract class abstractSet<T> {
  abstract add(value: T): this;
  abstract clear(): this;
  abstract delete(value: T): this;
  abstract forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any
  ): this;
  abstract has(value: T): boolean;
  abstract return(): Set<T>;
}

/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:31:58
 * @LastEditTime: 2021-08-16 12:09:14
 * @FilePath: /you-will-like/src/core/chain/set/set.ts
 * @Description: set
 */
import { abstractSet } from "./abstractSet";
export class JSet<T> implements abstractSet<T> {
  private selfSet: Set<T>;
  constructor() {
    this.selfSet = new Set();
  }
  add(value: T): this {
    this.selfSet.add(value);
    return this;
  }

  clear(): this {
    this.selfSet.clear();
    return this;
  }

  delete(value: T): this {
    this.selfSet.delete(value);
    return this;
  }

  forEach(cb: (value: T, value2: T, set: Set<T>) => void, thisArgs?: any) {
    if (thisArgs) this.selfSet.forEach(cb, thisArgs);
    else this.selfSet.forEach(cb);
    return this;
  }

  has(value: T): boolean {
    return this.selfSet.has(value);
  }

  return(): Set<T> {
    return this.selfSet;
  }
}

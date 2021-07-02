/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:31:58
 * @LastEditTime: 2021-07-02 23:37:00
 * @FilePath: /you-will-like/src/core/chain/set/set.ts
 * @Description: set
 */
import { abstractSet } from "./abstractSet";
export class JSet<T> implements abstractSet<T> {
  #selfSet: Set<T>;
  constructor() {
    this.#selfSet = new Set();
  }
  add(value: T): this {
    this.#selfSet.add(value);
    return this;
  }

  clear(): this {
    this.#selfSet.clear();
    return this;
  }

  delete(value: T): this {
    this.#selfSet.delete(value);
    return this;
  }

  forEach(cb: (value: T, value2: T, set: Set<T>) => void, thisArgs?: any) {
    if (thisArgs) this.#selfSet.forEach(cb, thisArgs);
    else this.#selfSet.forEach(cb);
    return this;
  }

  has(value: T): boolean {
    return this.#selfSet.has(value);
  }

  return(): Set<T> {
    return this.#selfSet;
  }
}

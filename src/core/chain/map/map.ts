/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 22:50:37
 * @LastEditTime: 2021-07-02 23:28:33
 * @FilePath: /you-will-like/src/core/chain/map/map.ts
 * @Description: map
 */
import { abstractMap } from "./abstractMap";

export class JMap<K, V> implements abstractMap<K, V> {
  #selfMap: Map<K, V>;

  constructor() {
    this.#selfMap = new Map();
  }

  clear(): this {
    this.#selfMap.clear();
    return this;
  }

  delete(key: K): this {
    this.#selfMap.delete(key);
    return this;
  }
  // @ts-ignore
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): this {
    if (thisArg) this.#selfMap.forEach(callbackfn, thisArg);
    else this.#selfMap.forEach(callbackfn);
    return this;
  }

  get(key: K): V | undefined {
    return this.#selfMap.get(key);
  }

  has(key: K): boolean {
    return this.#selfMap.has(key);
  }

  set(key: K, value: V): this {
    this.#selfMap.set(key, value);
    return this;
  }

  // @ts-ignore
  return(): Map<K, V> {
    return this.#selfMap;
  }
}

/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 22:47:55
 * @LastEditTime: 2021-07-02 23:09:20
 * @FilePath: /you-will-like/src/core/chain/map/abstractMap.ts
 * @Description: 抽象类Map
 */
export abstract class abstractMap<K, V> {
  abstract clear(): this;
  abstract delete(key: K): this;
  abstract forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): this;
  abstract get(key: K): V | undefined;
  abstract has(key: K): boolean;
  abstract set(key: K, value: V): this;
  abstract return<K, V>(): Map<K, V>;
}

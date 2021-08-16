/*
 * @Author: 邱狮杰
 * @Date: 2021-06-26 22:00:41
 * @LastEditTime: 2021-08-16 12:33:42
 * @FilePath: /you-will-like/src/core/strategist/strategist.ts
 * @Description: 策略者
 */
import { strategistAbstract } from "./types";
export class Strategist implements strategistAbstract {
  private readonly allStrategies: Map<string, Function>;
  constructor() {
    this.allStrategies = new Map();
  }

  private doesItExist(key: string): boolean {
    const isHas = this.allStrategies.has(key);
    if (!isHas) return false;
    if (isHas && typeof this.allStrategies.get(key) !== "function")
      return false;
    return true;
  }

  createStrategy<T, R>(key: string, fn: (args: R) => T): this {
    if (this.doesItExist(key)) return this;
    this.allStrategies.set(key, fn);
    return this;
  }

  callPolicy<T, R extends any>(key: string, args: R): T | boolean {
    if (!this.doesItExist(key)) return false;
    return this.allStrategies.get(key)?.(args) as T;
  }

  rewritingStrategy<C, E>(key: string, fn: (args: C) => E): this {
    if (!this.doesItExist(key)) return this;
    this.allStrategies.set(key, fn);
    return this;
  }
}

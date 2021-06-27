/*
 * @Author: 邱狮杰
 * @Date: 2021-06-26 21:45:55
 * @LastEditTime: 2021-06-26 22:30:07
 * @FilePath: /you-will-like/src/core/strategist/types.ts
 * @Description: 策略者模型
 */

export abstract class strategistAbstract {
  abstract createStrategy<T, R>(key: string, fn: (args: R) => T): this; // 注册一个策略

  abstract callPolicy<T, R>(key: string, args: R): T | boolean; // 调用策略

  abstract rewritingStrategy<C, E>(key: string, fn: (args: C) => E): this; // 重写策略
}

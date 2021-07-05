/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-05 12:40:51
 * @LastEditTime : 2021-07-05 12:44:42
 * @FilePath     : /you-will-like/src/core/function/judgment.ts
 * @Description  : 判断相关
 */
/**
 * @description 非空判断
 */
type nonEmptyJudgmentCb<T, R> = (val: T) => R
export function nonEmptyJudgment<T, R>(val: T, cb: nonEmptyJudgmentCb<T, R>): R | T {
  if (val) return val
  return cb(val)
}

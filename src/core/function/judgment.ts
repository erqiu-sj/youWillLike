/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-05 12:40:51
 * @LastEditTime: 2021-07-26 20:55:54
 * @FilePath: /you-will-like/src/core/function/judgment.ts
 * @Description  : 判断相关
 */
/**
 * @description 非空判断
 */
type nonEmptyJudgmentCb<T, R> = (val: T) => R;
export function nonEmptyJudgment<T, R>(
  val: T,
  cb: nonEmptyJudgmentCb<T, R>
): R | T {
  if (val) return val;
  return cb(val);
}
/**
 * @description 重写对象属性
 * @param { T extends object } contrast 被重写对象的副本
 * @param { keyof T[] } beforeReplacement 被重写对象的key数组
 * @param { string[] } afterReplacement 根据beforeReplacement索引进行重写
 * @returns { T }
 */
export function replaceObjectProperties<T extends object, R extends object>(
  contrast: T,
  beforeReplacement: (keyof T)[],
  afterReplacement: string[]
): R {
  if (beforeReplacement.length !== afterReplacement.length)
    throw new Error(
      "The length of the replacement attribute does not want to wait"
    );
  let r = JSON.stringify(contrast);
  beforeReplacement.forEach(
    (beforeItem, beforeIndex) =>
      (r = r.replace(
        new RegExp(beforeItem as string),
        afterReplacement[beforeIndex]
      ))
  );
  return JSON.parse(r);
}
/**
 * @description 单例模式
 * @param { Function } fn
 * @returns { ()=>T }
 */
export function Singleton<T>(fn: () => T): () => T {
  let result: null | T = null;
  return function () {
    return result ? result : (result = fn());
  };
}

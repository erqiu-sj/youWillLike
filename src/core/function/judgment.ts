/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-05 12:40:51
 * @LastEditTime: 2021-07-25 15:21:43
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

export function replaceObjectProperties(
  contrast: object,
  beforeReplacement: string[],
  afterReplacement: string[]
) {
  if (beforeReplacement.length !== afterReplacement.length)
    throw new Error(
      "The length of the replacement attribute does not want to wait"
    );
  let r = JSON.stringify(contrast);
  beforeReplacement.forEach(
    (beforeItem, beforeIndex) =>
      (r = r.replace(new RegExp(beforeItem), afterReplacement[beforeIndex]))
  );
  return JSON.parse(r);
}

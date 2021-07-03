/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:50:19
 * @LastEditTime: 2021-07-03 10:57:08
 * @FilePath: /you-will-like/src/core/decorators/catch/methodCatch.ts
 * @Description: methodCatch
 */
type catchErrorCb<T> = (errMessage: T) => void;
/**
 * @description 将错误字符串传入回调
 * @param { catchErrorCb } cb
 * @returns
 */
export function catchError(cb: catchErrorCb<string>) {
  return function (
    _: any,
    key: string,
    desc: TypedPropertyDescriptor<() => void>
  ) {
    try {
      desc.value && desc.value();
    } catch (e: { message?: string } | any) {
      cb(e?.message || e);
    }
  };
}
/**
 * @description 将错误json转为对象,传入回调
 * @param { catchErrorCb } cb  回调函数
 * @returns
 */
export function catchErrorJSONParse<T>(cb: catchErrorCb<T>) {
  return function (
    _: any,
    key: string,
    desc: TypedPropertyDescriptor<() => void>
  ) {
    try {
      desc.value && desc.value();
    } catch (e: { message?: string } | any) {
      if (e?.message) cb(JSON.parse(e.message));
      else cb(JSON.parse(e));
    }
  };
}

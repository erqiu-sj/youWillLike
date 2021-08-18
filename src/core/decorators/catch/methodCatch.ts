/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:50:19
 * @LastEditTime: 2021-08-16 13:01:19
 * @FilePath: /you-will-like/src/core/decorators/catch/methodCatch.ts
 * @Description: methodCatch
 */
// import { SynchronizationAwaitError } from "synchronizationawaiterror";
export function SynchronizationAwaitError<T, B = T, E = Error>(
  promise: Promise<T>,
  beautifyReturnValue?: (res: T) => B,
  errorCaptured?: object
): Promise<[E, null] | [null, T | B]> {
  return promise
    .then<[null, T | B]>((result: T) => {
      return [null, beautifyReturnValue ? beautifyReturnValue(result) : result];
    })
    .catch<[E, null]>((causeOfError: E) => {
      if (errorCaptured)
        return [Object.assign(causeOfError, errorCaptured), null];
      return [causeOfError, null];
    });
}

export type catchErrorCb<T> = (errMessage: T) => void;
/**
 * @description 将错误字符串传入回调
 * @param { catchErrorCb } cb
 * @returns
 */
export function catchError(cb: catchErrorCb<string>): any {
  return function (
    _: any,
    key: string,
    desc: TypedPropertyDescriptor<Function>
  ) {
    const fn = desc.value;
    desc.value = function () {
      try {
        return fn?.(...arguments);
      } catch (e: any) {
        cb(e?.message || e);
      }
    };
  };
}
/**
 * @description 将错误json转为对象,传入回调
 * @param { catchErrorCb } cb  回调函数
 * @returns { any }
 */
export function catchErrorJSONParse<T>(cb: catchErrorCb<T>): any {
  return function (
    _: any,
    key: string,
    desc: TypedPropertyDescriptor<Function>
  ) {
    const fn = desc.value;
    desc.value = function () {
      try {
        return fn?.(...arguments);
      } catch (e: any) {
        cb(e?.message ? JSON.parse(e?.message) : JSON.parse(e));
      }
    };
  };
}
/**
 * @description 你不应该往这个装饰器传入任何形参，因为 arguments 无法再异步函数中获取
 * @param { catchErrorCb } cb 错误回调
 * @returns { any }
 */
export function catchErrorPromise<T>(cb: catchErrorCb<T>): any {
  return function (_: any, key: string, desc: TypedPropertyDescriptor<any>) {
    const fn = desc.value;
    const args = arguments;
    desc.value = async function () {
      const [err, res] = await SynchronizationAwaitError<unknown, unknown, any>(
        fn(...args)
      );
      if (err) cb(err);
      return res;
    };
  };
}
/**
 * @description 你不应该往这个装饰器传入任何形参，因为 arguments 无法再异步函数中获取
 * @param { catchErrorCb } cb 错误回调
 * @returns { any }
 */
export function catchErrorPromiseJSONParse<T>(cb: catchErrorCb<T>): any {
  return function (_: any, key: string, desc: TypedPropertyDescriptor<any>) {
    const fn = desc.value;
    const args = arguments;
    desc.value = async function () {
      const [err, res] = await SynchronizationAwaitError<unknown, unknown, any>(
        // //@ts-ignor
        fn(...args)
      );
      if (err) cb(JSON.parse(err));
      return res;
    };
  };
}

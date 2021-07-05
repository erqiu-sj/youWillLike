/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:50:19
 * @LastEditTime : 2021-07-05 12:37:32
 * @FilePath     : /you-will-like/src/core/decorators/catch/methodCatch.ts
 * @Description: methodCatch
 */
import { SynchronizationAwaitError } from 'synchronizationawaiterror'
type catchErrorCb<T> = (errMessage: T) => void
/**
 * @description 将错误字符串传入回调
 * @param { catchErrorCb } cb
 * @returns
 */
export function catchError(cb: catchErrorCb<string>) {
  return function (_: any, key: string, desc: TypedPropertyDescriptor<Function>) {
    try {
      desc.value && desc.value()
    } catch (e: { message?: string } | any) {
      cb(e?.message || e)
    }
  }
}
/**
 * @description 将错误json转为对象,传入回调
 * @param { catchErrorCb } cb  回调函数
 * @returns
 */
export function catchErrorJSONParse<T>(cb: catchErrorCb<T>) {
  return function (_: any, key: string, desc: TypedPropertyDescriptor<Function>) {
    try {
      desc.value && desc.value()
    } catch (e: { message?: string } | any) {
      if (e?.message) cb(JSON.parse(e.message))
      else cb(JSON.parse(e))
    }
  }
}
export function catchErrorPromise<T>(cb: catchErrorCb<T>): any {
  return async function (_: any, key: string, desc: TypedPropertyDescriptor<any>) {
    const [err] = await SynchronizationAwaitError<unknown, unknown, any>(desc.value?.())
    if (err) cb(err)
  }
}

export function catchErrorPromiseJSONParse<T>(cb: catchErrorCb<T>) {
  return async function (_: any, key: string, desc: TypedPropertyDescriptor<any>) {
    const [err] = await SynchronizationAwaitError<unknown, unknown, any>(desc.value?.())
    if (err) cb(JSON.parse(err))
  }
}

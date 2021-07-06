/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:50:19
 * @LastEditTime : 2021-07-06 10:14:44
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
export function catchError(cb: catchErrorCb<string>): any {
  return function (_: any, key: string, desc: TypedPropertyDescriptor<Function>) {
    const fn = desc.value
    desc.value = function () {
      try {
        fn?.()
      } catch (e) {
        cb(e?.message || e)
      }
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
    const fn = desc.value
    desc.value = function () {
      try {
        fn?.()
      } catch (e) {
        cb(e?.message ? JSON.parse(e?.message) : JSON.parse(e))
      }
    }
  }
}
export function catchErrorPromise<T>(cb: catchErrorCb<T>): any {
  return function (_: any, key: string, desc: TypedPropertyDescriptor<any>) {
    const fn = desc.value
    desc.value = async function () {
      const [err] = await SynchronizationAwaitError<unknown, unknown, any>(desc.value)
      if (err) cb(err)
    }
  }
}

export function catchErrorPromiseJSONParse<T>(cb: catchErrorCb<T>) {
  return async function (_: any, key: string, desc: TypedPropertyDescriptor<any>) {
    const fn = desc.value
    desc.value = async function () {
      const [err] = await SynchronizationAwaitError<unknown, unknown, any>(fn())
      if (err) cb(JSON.parse(err))
    }
  }
}

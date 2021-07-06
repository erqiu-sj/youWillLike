/*
 * @Author: 邱狮杰
 * @Date: 2021-07-03 11:18:45
 * @LastEditTime: 2021-07-03 14:22:48
 * @FilePath: /you-will-like/src/core/decorators/attribute/format.ts
 * @Description: 格式化
 */
import 'reflect-metadata'

type formatFnTypes<P, T> = (params: P) => T

/**
 * @description 格式化属性
 * @param { formatFnTypes } formatFn 函数返回值会是该属性的值
 * @param { P } params 函数的参数
 * @returns
 */
export function format<P, T>(formatFn: formatFnTypes<P, T>, params: P) {
  return function (target: any, key: string) {
    Reflect.defineMetadata(key, formatFn(params), target)
  }
}
/**
 * @description 函数装饰器获取被装饰的格式化属性
 * @param { string } property 该class中的属性key
 * @returns
 */
export function getFormatValue<T>(property: string) {
  return function (target: any, key: string, desc: TypedPropertyDescriptor<() => T>) {
    const defaultVal: T = Reflect.getMetadata(property, target)
    desc.value = function () {
      return defaultVal as T
    }
  }
}

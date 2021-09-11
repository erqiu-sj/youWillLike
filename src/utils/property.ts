/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-22 12:56:22
 * @LastEditTime: 2021-07-25 12:27:39
 * @FilePath: /you-will-like/src/utils/property/property.ts
 * @Description  : hasProperty
 */

export function hasProperty(object: object, key: string | number | symbol, falseCb?: () => void, trueCb?: () => void): boolean {
  const falseCallback = falseCb && falseCb
  const trueCallback = trueCb && trueCb
  const result = Reflect.has(object, key)
  result ? trueCallback?.() : falseCallback?.()
  return result
}

export function getProperty<T>(object: object, key: string | number | symbol, falseCb?: () => void, trueCb?: (val: T) => void): T {
  const falseCallback = falseCb && falseCb
  const trueCallback = trueCb && trueCb
  const getVal = Reflect.get(object, key)
  getVal ? trueCallback?.(getVal) : falseCallback?.()
  return getVal
}

export function setProperty<T>(object: object, key: string | number | symbol, value: T, skipNulls?: boolean, falseCb?: () => void, trueCb?: () => void): boolean {
  if (skipNulls && value === (null || undefined)) return false
  const result = Reflect.set(object, key, value)
  const falseCallback = falseCb && falseCb
  const trueCallback = trueCb && trueCb
  result ? trueCallback?.() : falseCallback?.()
  return result
}

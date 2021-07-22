/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-22 12:56:22
 * @LastEditTime : 2021-07-22 16:39:35
 * @FilePath     : /you-will-like/src/utils/property/property.ts
 * @Description  : hasProperty
 */

export function hasProperty(object: object, key: string | number | symbol, falseCb?: () => void, trueCb?: () => void) {
	const falseCallback = falseCb && falseCb
	const trueCallback = trueCb && trueCb
	Reflect.has(object, key) ? trueCallback?.() : falseCallback?.()
}


export function getProperty<T>(object: object, key: string | number | symbol, falseCb?: () => void, trueCb?: (val: T) => void): T {
	const falseCallback = falseCb && falseCb
	const trueCallback = trueCb && trueCb
	const getVal = Reflect.get(object, key)
	getVal ? trueCallback?.(getVal) : falseCallback?.()
	return getVal
}

export function setProperty<T>(object: object, key: string | number | symbol, value: T, skipNulls?: boolean, falseCb?: () => void, trueCb?: () => void): boolean {
	if (skipNulls && value === (null || undefined))
		return false
	const result = Reflect.set(object, key, value)
	const falseCallback = falseCb && falseCb
	const trueCallback = trueCb && trueCb
	result ? trueCallback?.() : falseCallback?.()
	return result
}
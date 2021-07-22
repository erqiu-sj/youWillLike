/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-22 16:14:49
 * @LastEditTime : 2021-07-22 18:18:04
 * @FilePath     : /you-will-like/src/core/stateMode/utils.ts
 * @Description  : utils
 */
import { stateModeUserOptions, stateModeOptions } from './types'
import { setProperty, getProperty } from '../../utils/property'
/**
 * @description 根据优先级获取选项内容
 * @param { stateModeUserOptions } options options
 * @param { keyof stateModeUserOptions } highestPriority 
 * @param { (keyof stateModeUserOptions)[] } comparePriority 
 * @returns  { keyof stateModeUserOptions } 返回可取的options key
 */
export function optionPriority(options: stateModeUserOptions, highestPriority: keyof stateModeUserOptions, comparePriority: (keyof stateModeUserOptions)[]): keyof stateModeUserOptions {
	const h = {}
	comparePriority.forEach(compareItem =>
		setProperty(h, compareItem, getProperty(options, compareItem), true)
	)
	const result = getProperty(h, highestPriority)
	if (!result) {
		// 最高优先级的选项为空时取对比优先级的选项key
		// 且对比优先级的value不为空的话取第一个对比优先级key
		return comparePriority.filter(compareItem => {
			if (compareItem === highestPriority) return
			if (!getProperty(h, compareItem)) return
			return compareItem
		})[0] || ''
	}
	return highestPriority
}
// function optionHasThisValue(options: stateModeOptions, successkey: keyof stateModeUserOptions, failKey: keyof stateModeUserOptions)
export function optionHasThisValue(options: unknown, successkey: unknown, failKey: unknown) {
	// const result = getProperty(options, successkey)
	// const failResult = getProperty(options, failKey)
	// if (result) return success && success()
	// if (failResult) return fail && fail()
	// defaultCb && defaultCb()

}
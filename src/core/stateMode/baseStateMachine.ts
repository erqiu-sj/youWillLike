/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-21 12:47:17
 * @LastEditTime : 2021-07-22 17:49:16
 * @FilePath     : /you-will-like/src/core/stateMode/baseStateMachine.ts
 * @Description  : baseStateMachine
 */


import { stateModeAbstract } from './types'
import { hasProperty, getProperty } from '../../utils/property/index'
import { warn } from '../../utils/error/warn'
import { optionPriority } from './utils'
import { stateModeUserOptions, stateModeOptions } from './types'
import { CURRENT_STATE } from './const'
export class BaseStateMachine implements stateModeAbstract {
	curState = null
	stateList = []
	executionQueue = new Map<string, Function>() // 执行队列
	#executionQueueParameters: ArrayLike<any>[] = [] // 执行队列参数
	#stateInstance: Function[] = []
	#options: {} | stateModeOptions = {}
	constructor(stateInstance: Function[], executionQueueParameters?: ArrayLike<any>[], stateOptions?: stateModeUserOptions) {
		this.#stateInstance = stateInstance
		this.#executionQueueParameters = executionQueueParameters || []
		this.#options = stateOptions || {}
		stateOptions && this.parseOptios(stateOptions)
		stateInstance.forEach(instance =>
			hasProperty(instance, CURRENT_STATE, () => warn(`${instance.name} Please check if the function has ${CURRENT_STATE} static property!`), () => this.executionQueue.set(getProperty(instance, CURRENT_STATE), instance))
		)
	}
	run(): this {
		return this
	}
	/**
	 * @description 立即初始化
	 */
	private onDemandInitialization() {
		this.#stateInstance.forEach(instance =>
			hasProperty(instance, CURRENT_STATE, () => warn(`${instance.name} Please check if the function has ${CURRENT_STATE} static property!`), () => this.executionQueue.set(getProperty(instance, CURRENT_STATE), instance))
		)
	}
	/**
	 * @description 解析options
	 */
	private parseOptios(stateOptions: stateModeUserOptions) {
		const options: stateModeOptions = {
			initializationMode: optionPriority(stateOptions as unknown as stateModeUserOptions, 'initialization', ['initialization', 'onDemandInitialization'])
		}
		this.#options = options
	}
}
class B {
	static currentState = 'curB'
	constructor(ar: number[]) { }
}
new BaseStateMachine([B], [], { onDemandInitialization: false })
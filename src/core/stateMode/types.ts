/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-21 12:28:39
 * @LastEditTime : 2021-07-22 17:35:41
 * @FilePath     : /you-will-like/src/core/stateMode/types.ts
 * @Description  :
 */

type SimpleTypes = string | number | boolean | undefined | null | bigint | symbol

export interface stateModeUserOptions { // 用户选项
	onDemandInitialization?: boolean // 按需初始化
	initialization?: boolean // 立即初始化
}
export interface stateModeOptions {
	// 执行选项 value 为 key
	initializationMode: keyof stateModeUserOptions
}
export abstract class stateModeAbstract {
	abstract curState: any // 当前状态 
	abstract stateList: any[] // 状态队列
	abstract run(): this
}

export abstract class stateModeSimpleAbstract {
	abstract addSimpleState(val: SimpleTypes): this | never// 新增一个简单类型状态
	abstract removeSimpleState(val: SimpleTypes): this | never // 删除一个简单类型状态
}


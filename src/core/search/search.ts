/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-24 12:51:33
 * @LastEditTime : 2021-06-25 19:11:56
 * @FilePath     : /you-will-like/src/core/search/search.ts
 * @Description  :
 */

import { searchAbstract, initializationTypes, diyHandlerTypes } from './types'

export class SearchHandler<T extends object> implements searchAbstract<T> {
  protected database: T | undefined
  protected handlerList: Map<string, (params: diyHandlerTypes<T, unknown, unknown>) => void> | undefined // 自定义处理函数map
  private databaseBackup: T | undefined // 参数备份

  constructor(initParams?: T) {
    this.database = initParams
    this.databaseBackup = initParams
    // @ts-ignore
    this.handlerList = new Map<string, (params: T) => void>()
  }

  /**
   * @description 初始化参数
   * @param { T } val
   */
  initialization(val: initializationTypes<T>): this {
    if (typeof val === 'function') {
      this.database = val()
      this.databaseBackup = val()
      return this
    }
    this.database = val
    this.databaseBackup = val
    return this
  }

  /**
   * @description 清空字段值
   * @param { T } val 可选 ， val不为空则赋值给参数
   */
  resetField(val?: T): this {
    if (val) {
      this.database = val
      return this
    }
    this.database = this.databaseBackup
    return this
  }

  registerHandler(key: string, fn: (params: diyHandlerTypes<T, unknown, unknown>) => void): this {
    if (this?.handlerList?.has(key)) return this
    this?.handlerList?.set(key, fn)
    return this
  }

  transferHandler(key: string): this {
    if (!this?.handlerList?.has(key)) throw new Error(`您并没有定义${key}相关处理函数`)
    this.handlerList.get(key)!({ add: this.addNewField, edit: this.rewriteField, delete: this.deleteField })
    return this
  }

  rewriteField<R>(key: string, val: R): this {
    if (!Reflect.has(this.database as object, key)) return this
    Reflect.set(this.database as object, key, val)
    Reflect.set(this.databaseBackup as object, key, val)
    return this
  }

  addNewField<V>(key: string, val: V): this {
    if (!Reflect.has(this.database as object, key)) {
      Reflect.set(this.database as object, key, val)
      Reflect.set(this.databaseBackup as object, key, val)
    }
    return this
  }

  deleteField(key: string): this {
    if (!Reflect.has(this.database as object, key)) return this
    Reflect.deleteProperty(this.database as object, key)
    Reflect.deleteProperty(this.databaseBackup as object, key)
    return this
  }

  returnParams<P>(): P {
    return this.database as P & T
  }
}

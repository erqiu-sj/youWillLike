/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-24 12:51:33
 * @LastEditTime: 2021-06-26 00:14:04
 * @FilePath: /you-will-like/src/core/search/search.ts
 * @Description  :
 */

import { searchAbstract, initializationTypes, diyHandlerTypes } from "./types";
import { searchBase } from "./searchBase";

export class SearchHandler<T extends object>
  extends searchBase
  implements searchAbstract<T>
{
  protected database: T | undefined;
  protected handlerList:
    | Map<string, (params: diyHandlerTypes<T, unknown, unknown, any>) => void>
    | undefined; // 自定义处理函数map
  private databaseBackup: T | undefined; // 参数备份

  constructor(initParams?: T) {
    super();
    this.database = initParams;
    this.databaseBackup = initParams;
    // @ts-ignore
    this.handlerList = new Map<string, (params: T) => void>();
  }
  /**
   * @description 是否初始化
   */
  private initializeVal(): void {
    // 初始化
    if (!super.initialize(this.database)) {
      this.database = {} as T;
      this.databaseBackup = {} as T;
    }
  }

  /**
   * @description 初始化参数
   * @param { T } val
   */
  initialization(val: initializationTypes<T>): this {
    if (typeof val === "function") {
      this.database = val();
      this.databaseBackup = val();
      return this;
    }
    this.database = val;
    this.databaseBackup = val;
    return this;
  }

  /**
   * @description 清空字段值
   * @param { T } val 可选 ， val不为空则赋值给参数
   */
  resetField(val?: T): this {
    if (val) {
      this.database = val;
      return this;
    }
    this.database = this.databaseBackup;
    return this;
  }
  registerHandler<U>(
    key: string,
    fn: (params: diyHandlerTypes<T, unknown, unknown, U>) => void
  ): this {
    if (this?.handlerList?.has(key)) return this;
    this?.handlerList?.set(key, fn);
    return this;
  }

  transferHandler<A>(key: string, val: A): this {
    if (!this?.handlerList?.has(key))
      throw new Error(`您并没有定义${key}相关处理函数`);
    this.handlerList.get(key)?.({
      add: this.addNewField.bind(this),
      edit: this.rewriteField.bind(this),
      remove: this.deleteField.bind(this),
      has: this.has.bind(this),
      value: val,
    });
    return this;
  }

  rewriteField<R>(key: string, val: R): this {
    if (!Reflect.has(this.database as object, key)) return this;
    Reflect.set(this.database as object, key, val);
    Reflect.set(this.databaseBackup as object, key, val);
    return this;
  }

  addNewField<V>(key: string, val: V): this {
    if (!Reflect.has(this.database as object, key)) {
      Reflect.set(this.database as object, key, val);
      Reflect.set(this.databaseBackup as object, key, val);
    }
    return this;
  }

  deleteField(key: string): this {
    if (!Reflect.has(this.database as object, key)) return this;
    Reflect.deleteProperty(this.database as object, key);
    Reflect.deleteProperty(this.databaseBackup as object, key);
    return this;
  }

  returnParams<P>(): P {
    return this.database as P & T;
  }
}

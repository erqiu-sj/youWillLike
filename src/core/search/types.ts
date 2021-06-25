/**
 * @Author       : 邱狮杰
 * @Date         : 2021-06-24 12:40:42
 * @LastEditTime : 2021-06-24 12:40:46
 * @FilePath     : /you-will-like/src/core/search/types.ts
 * @Description  : search Types
 */
import {Map} from "immutable";
import {SearchHandler} from "./search";

export interface diyHandlerTypes<T extends object, V, R> {
    add: (key: string, val: V) => SearchHandler<T>

    edit: (key: string, val: R) => SearchHandler<T>

    delete: (key: string) => SearchHandler<T>
}


/**
 * @description 定义搜索函数的抽象方法
 * @type { T } 参数类型
 * @type { V } 新增的字段类型
 * @type { R } 修改字段的值类型
 */
export type initializationTypes<T> = () => T | T


export abstract class searchAbstract<T extends object> {

    abstract initialization(val: initializationTypes<T>): this; // 初始化字段

    abstract resetField(val?: T): this; // 清除字段

    abstract registerHandler(key: string, fn: (params: diyHandlerTypes<T , unknown, unknown>) => void): this; // 添加对某一字段的处理函数

    abstract transferHandler(key: string): this; // 调用自定义的处理函数

    abstract rewriteField<R>(key: string, val: R): this; // 重写某字段值

    abstract addNewField<V>(key: string, val: V): this; // 新增字段

    abstract deleteField(key: string): this // 删除字段

    abstract returnParams(): T
}


/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-25 12:06:07
 * @LastEditTime : 2021-06-28 14:28:24
 * @FilePath     : /you-will-like/src/core/formData/types.ts
 * @Description  :
 */

export abstract class formDataAbstract<T> {
  abstract append(name: keyof T, value: string | Blob, fileName?: string): this

  abstract delete(name: keyof T): this

  abstract get(name: keyof T): FormDataEntryValue | null

  abstract getAll(name: string): FormDataEntryValue[]

  abstract has(name: keyof T): boolean

  abstract set(name: keyof T, value: string | Blob, fileName?: string): this

  abstract forEach(callbackFn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): this
}

/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-25 12:06:43
 * @LastEditTime : 2021-06-28 14:29:12
 * @FilePath     : /you-will-like/src/core/formData/formData.ts
 * @Description  : formData
 */

import { formDataAbstract } from './types'

export class FormDataHandler<T extends object> implements formDataAbstract<T> {
  private readonly formData: FormData

  constructor() {
    this.formData = new FormData()
  }

  append(name: keyof T, value: string | Blob, fileName?: string): this {
    if (fileName) this.formData.append(name as string, value, fileName)
    else this.formData.append(name as string, value)
    return this
  }

  delete(name: keyof T): this {
    this.formData.delete(name as string)
    return this
  }

  get(name: keyof T): FormDataEntryValue | null {
    return this.formData.get(name as string)
  }

  getAll(name: string): FormDataEntryValue[] {
    return this.formData.getAll(name)
  }

  has(name: keyof T): boolean {
    return this.formData.has(name as string)
  }

  set(name: keyof T, value: string | Blob, fileName?: string): this {
    if (fileName) this.formData.set(name as string, value, fileName)
    else this.formData.set(name as string, value)
    return this
  }

  forEach(callbackFn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): this {
    if (thisArg) this.formData.forEach(callbackFn, thisArg)
    else this.formData.forEach(callbackFn)
    return this
  }

  return(): FormData {
    return this.formData
  }
}

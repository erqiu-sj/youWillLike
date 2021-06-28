/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-25 12:06:43
 * @LastEditTime : 2021-06-28 14:21:47
 * @FilePath     : /you-will-like/src/core/formData/formData.ts
 * @Description  : formData
 */

import { formDataAbstract } from './types'

export class FormDataHandler implements formDataAbstract {
  private readonly formData: FormData

  constructor() {
    this.formData = new FormData()
  }

  append(name: string, value: string | Blob, fileName?: string): this {
    if (fileName) this.formData.append(name, value, fileName)
    else this.formData.append(name, value)
    return this
  }

  delete(name: string): this {
    this.formData.delete(name)
    return this
  }

  get(name: string): FormDataEntryValue | null {
    return this.formData.get(name)
  }

  getAll(name: string): FormDataEntryValue[] {
    return this.formData.getAll(name)
  }

  has(name: string): boolean {
    return this.formData.has(name)
  }

  set(name: string, value: string | Blob, fileName?: string): this {
    if (fileName) this.formData.set(name, value, fileName)
    else this.formData.set(name, value)
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

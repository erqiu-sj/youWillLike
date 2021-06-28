import { formDataAbstract } from './types'

export class FormDataHandler implements formDataAbstract {
  private readonly formData: FormData

  constructor() {
    this.formData = new FormData()
  }

  append(name: string, value: string | Blob, fileName?: string): this {
    this.formData.append(name, value, fileName)
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
    this.formData.set(name, value, fileName)
    return this
  }

  forEach(callbackFn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): this {
    this.formData.forEach(callbackFn, thisArg)
    return this
  }
}

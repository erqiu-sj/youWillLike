export abstract class formDataAbstract {
    abstract append(name: string, value: string | Blob, fileName?: string): this;

    abstract delete(name: string): this;

    abstract get(name: string): FormDataEntryValue | null;

    abstract getAll(name: string): FormDataEntryValue[];

    abstract has(name: string): boolean;

    abstract set(name: string, value: string | Blob, fileName?: string): this;

    abstract forEach(callbackFn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): this
}
import type { abstractLocalstorage } from "./abstractLocalstorage";

class JLocalstorage implements abstractLocalstorage {
  private store: Storage;
  constructor() {
    this.store = localStorage;
  }

  clear(): void {
    return this.store.clear();
  }
  key(index: number): string | null {
    return this.store.key(index);
  }
  getItem(key: string): string | null {
    return this.store.getItem(key);
  }
  setItem(key: string, value: string): this {
    this.store.setItem(key, value);
    return this;
  }
  removeItem(key: string): this {
    this.store.removeItem(key);
    return this;
  }
}

export { JLocalstorage };

export abstract class abstractLocalstorage {
  abstract clear(): void;
  abstract getItem(key: string): string | null;
  abstract key(index: number): string | null;
  abstract removeItem(key: string): this;
  abstract setItem(key: string, value: string): this;
}

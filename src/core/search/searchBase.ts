/*
 * @Author: 邱狮杰
 * @Date: 2021-06-25 23:22:34
 * @LastEditTime: 2021-06-25 23:32:00
 * @FilePath: /you-will-like/src/core/search/searchBase.ts
 * @Description: 描述
 */
import { searchBaseAbstract } from "./types";
export class searchBase implements searchBaseAbstract {
  initialize(value: unknown | undefined): boolean {
    if (!value) return false;
    return true;
  }

  has<T extends object>(obj: T, key: keyof T): boolean {
    return Reflect.has(obj, key);
  }
}

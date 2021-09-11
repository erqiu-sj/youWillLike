/*
 * @Author: 邱狮杰
 * @Date: 2021-07-25 12:26:25
 * @LastEditTime: 2021-07-25 12:29:18
 * @FilePath: /you-will-like/src/utils/property/index.d.ts
 * @Description: property .d.ts
 */

export declare function hasProperty(
  object: object,
  key: string | number | symbol,
  falseCb?: (() => void) | undefined,
  trueCb?: (() => void) | undefined
): boolean;

export declare function getProperty<T>(
  object: object,
  key: string | number | symbol,
  falseCb?: (() => void) | undefined,
  trueCb?: ((val: T) => void) | undefined
): T;

export declare function setProperty<T>(
  object: object,
  key: string | number | symbol,
  value: T,
  skipNulls?: boolean | undefined,
  falseCb?: (() => void) | undefined,
  trueCb?: (() => void) | undefined
): boolean;

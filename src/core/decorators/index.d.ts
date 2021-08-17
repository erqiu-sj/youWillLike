/*
 * @Author: 邱狮杰
 * @Date: 2021-07-03 14:26:17
 * @LastEditTime: 2021-08-16 12:43:52
 * @FilePath: /you-will-like/src/core/decorators/index.d.ts
 * @Description: .d.ts
 */
import { catchErrorCb } from "../../../dist/core/decorators/catch/methodCatch";
import { ConfigType } from "dayjs";
export declare function catchError(cb: catchErrorCb<string>): any;
export declare function catchErrorJSONParse<T>(cb: catchErrorCb<T>): any;
export declare function catchErrorPromise<T>(cb: catchErrorCb<T>): any;
export declare function catchErrorPromiseJSONParse<T>(cb: catchErrorCb<T>): any;
export declare function format<P, T>(
  formatFn: formatFnTypes<P, T>,
  params: P
): (target: any, key: string) => any;
export declare function formatDayJs(
  date?: ConfigType
): (target: object, key: string) => any;

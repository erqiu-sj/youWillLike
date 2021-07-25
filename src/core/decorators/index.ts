/*
 * @Author: 邱狮杰
 * @Date: 2021-07-03 14:26:24
 * @LastEditTime: 2021-07-25 12:20:25
 * @FilePath: /you-will-like/src/core/decorators/index.ts
 * @Description: entry
 */
import { format, formatDayJs } from "./attribute/format";
import { lock } from "./method/lock";
import {
  catchError,
  catchErrorJSONParse,
  catchErrorPromise,
  catchErrorPromiseJSONParse,
} from "./catch/methodCatch";
export {
  format,
  formatDayJs,
  catchError,
  catchErrorJSONParse,
  catchErrorPromise,
  catchErrorPromiseJSONParse,
  lock,
};

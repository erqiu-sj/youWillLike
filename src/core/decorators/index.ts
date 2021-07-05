/*
 * @Author: 邱狮杰
 * @Date: 2021-07-03 14:26:24
 * @LastEditTime : 2021-07-05 12:37:49
 * @FilePath     : /you-will-like/src/core/decorators/index.ts
 * @Description: entry
 */
import { format, getFormatValue } from './attribute/format'
import { catchError, catchErrorJSONParse, catchErrorPromise, catchErrorPromiseJSONParse } from './catch/methodCatch'
export { format, getFormatValue, catchError, catchErrorJSONParse, catchErrorPromise, catchErrorPromiseJSONParse }

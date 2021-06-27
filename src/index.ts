/*
 * @Author: 邱狮杰
 * @Date: 2021-06-25 22:57:06
 * @LastEditTime: 2021-06-27 12:27:42
 * @FilePath: /you-will-like/src/index.ts
 * @Description: entry
 */
import { SearchHandler } from "./core/search";
import type { searchAbstract } from "./core/search";
import { Strategist } from "./core/strategist";
import { base64 } from "./core/function";

import { FormDataHandler } from "./core/formData";

export { SearchHandler, FormDataHandler, Strategist, base64 };
export type { searchAbstract };

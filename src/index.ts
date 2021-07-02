/*
 * @Author: 邱狮杰
 * @Date: 2021-06-25 22:57:06
 * @LastEditTime: 2021-07-02 23:37:45
 * @FilePath: /you-will-like/src/index.ts
 * @Description: entry
 */
import { SearchHandler } from "./core/search";
import { JMap } from "./core/chain/map/map";
import { JSet } from "./core/chain/set/set";
import type { searchAbstract } from "./core/search";
import { Strategist } from "./core/strategist";
import { base64OrUniCode } from "./core/function";

import { FormDataHandler } from "./core/formData";

export {
  SearchHandler,
  FormDataHandler,
  Strategist,
  base64OrUniCode,
  JMap,
  JSet,
};
export type { searchAbstract };

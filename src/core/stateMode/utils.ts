/*
 * @Author       : 邱狮杰
 * @Date         : 2021-07-22 16:14:49
 * @LastEditTime: 2021-07-22 22:04:29
 * @FilePath: /you-will-like/src/core/stateMode/utils.ts
 * @Description  : utils
 */
import { stateModeUserOptions, stateModeOptions } from "./types";
import { setProperty, getProperty } from "../../utils/property";
/**
 * @description 根据优先级获取选项内容
 * @param { stateModeUserOptions } options options
 * @param { keyof stateModeUserOptions } highestPriority
 * @param { (keyof stateModeUserOptions)[] } comparePriority
 * @returns  { keyof stateModeUserOptions } 返回可取的options key
 */
export function optionPriority(
  options: stateModeUserOptions,
  highestPriority: keyof stateModeUserOptions,
  comparePriority: (keyof stateModeUserOptions)[]
): keyof stateModeUserOptions {
  const h = {};
  comparePriority.forEach((compareItem) =>
    setProperty(h, compareItem, getProperty(options, compareItem), true)
  );
  const result = getProperty(h, highestPriority);
  if (!result) {
    // 最高优先级的选项为空时取对比优先级的选项key
    // 且对比优先级的value不为空的话取第一个对比优先级key
    return (
      comparePriority.filter((compareItem) => {
        if (compareItem === highestPriority) return;
        if (!getProperty(h, compareItem)) return;
        return compareItem;
      })[0] || ""
    );
  }
  return highestPriority;
}
/**
 * @description 根据配置调度
 * @param { stateModeOptions | {} } options
 * @param { keyof stateModeOptions } key
 * @param { keyof stateModeUserOptions } successkey
 * @param { keyof stateModeUserOptions } failKey
 * @param { () => void } successCb
 * @param { () => void } failCb
 * @param { () => void } defaultCb
 * @returns { void }
 */
export function optionHasThisValue(
  options: stateModeOptions | {},
  key: keyof stateModeOptions,
  successkey: keyof stateModeUserOptions,
  failKey: keyof stateModeUserOptions,
  successCb?: () => void,
  failCb?: () => void,
  defaultCb?: () => void
): void {
  // 只配置了currentState 则执行默认配置
  if (Object.keys(options).length === 1) {
    defaultCb && defaultCb();
    return;
  }
  const resuleKey = getProperty(options, key);
  // 当配置中当key === successKey 时 执行successCb
  // 当配置中当key === failKey 时 执行failCb
  if (resuleKey === successkey) return successCb && successCb();
  else if (resuleKey === failKey) return failCb && failCb();
  else defaultCb && defaultCb();
}

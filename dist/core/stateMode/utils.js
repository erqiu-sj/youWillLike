"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionHasThisValue = exports.optionPriority = void 0;
const property_1 = require("../../utils/property");
/**
 * @description 根据优先级获取选项内容
 * @param { stateModeUserOptions } options options
 * @param { keyof stateModeUserOptions } highestPriority
 * @param { (keyof stateModeUserOptions)[] } comparePriority
 * @returns  { keyof stateModeUserOptions } 返回可取的options key
 */
function optionPriority(options, highestPriority, comparePriority) {
    const h = {};
    comparePriority.forEach((compareItem) => property_1.setProperty(h, compareItem, property_1.getProperty(options, compareItem), true));
    const result = property_1.getProperty(h, highestPriority);
    if (!result) {
        // 最高优先级的选项为空时取对比优先级的选项key
        // 且对比优先级的value不为空的话取第一个对比优先级key
        return (comparePriority.filter((compareItem) => {
            if (compareItem === highestPriority)
                return;
            if (!property_1.getProperty(h, compareItem))
                return;
            return compareItem;
        })[0] || "");
    }
    return highestPriority;
}
exports.optionPriority = optionPriority;
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
function optionHasThisValue(options, key, successkey, failKey, successCb, failCb, defaultCb) {
    // 只配置了currentState 则执行默认配置
    if (Object.keys(options).length === 1) {
        defaultCb && defaultCb();
        return;
    }
    const resuleKey = property_1.getProperty(options, key);
    // 当配置中当key === successKey 时 执行successCb
    // 当配置中当key === failKey 时 执行failCb
    if (resuleKey === successkey)
        return successCb && successCb();
    else if (resuleKey === failKey)
        return failCb && failCb();
    else
        defaultCb && defaultCb();
}
exports.optionHasThisValue = optionHasThisValue;

/*
 * @Author: 邱狮杰
 * @Date: 2021-07-03 11:18:45
 * @LastEditTime: 2021-07-25 12:21:18
 * @FilePath: /you-will-like/src/core/decorators/attribute/format.ts
 * @Description: 格式化
 */
import "reflect-metadata";
import dayjs from "dayjs";
import type { ConfigType } from "dayjs";

type formatFnTypes<P, T> = (params: P) => T;

/**
 * @description 格式化属性
 * @param { formatFnTypes } formatFn 函数返回值会是该属性的值
 * @param { P } params 函数的参数
 * @returns
 */
export function format<P, T>(formatFn: formatFnTypes<P, T>, params: P) {
  return function (target: any, key: string): any {
    const desc: PropertyDescriptor = {
      writable: true,
      value: formatFn(params),
    };
    return desc;
  };
}

export function formatDayJs(date?: ConfigType) {
  return function (target: object, key: string): any {
    const desc: PropertyDescriptor = {
      writable: true,
      value: dayjs(date),
    };
    return desc;
  };
}

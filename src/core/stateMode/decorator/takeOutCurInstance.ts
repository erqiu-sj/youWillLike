/*
 * @Author: 邱狮杰
 * @Date: 2021-07-22 22:24:44
 * @LastEditTime: 2021-07-22 23:15:15
 * @FilePath: /you-will-like/src/core/stateMode/decorator/takeOutCurInstance.ts
 * @Description: 取出当前实例 未初始化也好 初始化也好
 */

export function takeOutCurInstance(
  target: any,
  key: string,
  desc: TypedPropertyDescriptor<any>
) {
  const fn = desc.value;
  desc.value = function () {
    return fn?.call(null);
  };
}

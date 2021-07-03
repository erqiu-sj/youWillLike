/*
 * @Author: 邱狮杰
 * @Date: 2021-07-03 12:47:59
 * @LastEditTime: 2021-07-03 13:08:49
 * @FilePath: /you-will-like/src/core/decorators/attribute/required.ts
 * @Description: require
 */
function required(typed: string): ParameterDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    console.log(typed, target, propertyKey, parameterIndex);
  };
}
function Me() {
  return function (
    target: any,
    key: string,
    desc: TypedPropertyDescriptor<(res: number) => number>
  ) {
    desc.value?.(1);
  };
}
class A {
  @Me()
  getA(res: number) {
    console.log(res, "???");
    return 1;
  }
}

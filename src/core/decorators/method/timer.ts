/*
 * @Author: 邱狮杰
 * @Date: 2021-07-25 13:13:56
 * @LastEditTime: 2021-07-25 13:30:45
 * @FilePath: /you-will-like/src/core/decorators/method/timer.ts
 * @Description: timer
 */
function TimeOut(time: number) {
  return (target: object, key: string, desc: TypedPropertyDescriptor<any>) => {
    const fn = desc.value;
    desc.value = function () {
      const timeOutId = setTimeout(
        fn.bind(this, ...arguments, () => {
          clearTimeout(timeOutId);
        }),
        time
      );
    };
  };
}
function interval(time: number) {
  return (target: object, key: string, desc: TypedPropertyDescriptor<any>) => {
    const fn = desc.value;
    desc.value = function () {
      const timeOutId = setInterval(
        fn.bind(this, ...arguments, () => {
          clearInterval(timeOutId);
        }),
        time
      );
    };
  };
}
class T {
  a = 1;
  @interval(1000)
  s(n: number, two: number, t?: Function) {
    console.log(n, two, "what", this.a);
    t?.();
  }
}
new T().s(1, 2);

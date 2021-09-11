/*
 * @Author: 邱狮杰
 * @Date: 2021-07-25 13:13:56
 * @LastEditTime: 2021-07-25 13:30:45
 * @FilePath: /you-will-like/src/core/decorators/method/timer.ts
 * @Description: timer
 */
export function TimeOut(time: number) {
  return (target: object, key: string, desc: TypedPropertyDescriptor<any>) => {
    const fn = desc.value
    desc.value = async function () {
      const timeOutId = setTimeout(
        await fn.bind(this, ...arguments, () => {
          clearTimeout(timeOutId)
        }),
        time
      )
    }
  }
}
export function interval(time: number) {
  return (target: object, key: string, desc: TypedPropertyDescriptor<any>) => {
    const fn = desc.value
    desc.value = async function () {
      const timeOutId = setInterval(
        await fn.bind(this, ...arguments, () => {
          clearInterval(timeOutId)
        }),
        time
      )
    }
  }
}

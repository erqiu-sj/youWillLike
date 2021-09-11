/**
 * @description sleep wait
 * @param ms
 * @returns { void }
 */
export function sleep(ms: number): void {
  var start = new Date().getTime()
  while (true) if (new Date().getTime() - start > ms) break
}

/**
 * @description 将回调推入宏任务
 * @param cb callback
 * @param ms time
 */
export function macroTask(cb: () => Promise<void> | void, ms: number = 0) {
  setTimeout(async () => {
    await cb()
  }, ms)
}

/**
 * @description 将回调推入宏任务
 * @param cb callback
 */
export function microTask<T>(cb: () => T): Promise<T> {
  return new Promise(resolve => {
    resolve(cb())
  })
}

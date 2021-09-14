/**
 * @description 根据环境环境获取全局对象
 * @param windows
 * @returns
 */
export function getWindowOrGlobal() {
  return typeof window === 'undefined' ? global : window
}
export function hasWindows(): boolean {
  return typeof window === 'undefined' ? false : true
}
/**
 * @description 只在window环境运行
 * @param cb
 * @returns
 */
export function runWindows<T>(cb: Function): T {
  return hasWindows() ? cb() : false
}
/**
 * @description 使函数只在node环境才运行
 * @param cb
 * @returns
 */
export function runNode<T>(cb: Function): T {
  return hasWindows() ? false : cb()
}

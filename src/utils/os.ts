import { runWindows } from './hasWindow'

export function getOs(): { isAndroid: boolean; isiOS: boolean } {
  return runWindows(() => {
    let u = window?.navigator?.userAgent
    let isAndroid = u?.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
    let isiOS = !!u?.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
    return { isAndroid, isiOS }
  })
}

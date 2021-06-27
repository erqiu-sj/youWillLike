/*
 * @Author: 邱狮杰
 * @Date: 2021-06-26 22:58:10
 * @LastEditTime: 2021-06-27 12:28:36
 * @FilePath: /you-will-like/src/core/function/encryptionAndDecryption.ts
 * @Description: 加密或解密
 */

/**
 * @description 转base64
 * @param { string } val
 * @returns { string }
 */
export function toBase64(val: string): string {
  return window.btoa(val);
}
/**
 * @description 解码base64
 * @param { string } val
 * @returns { string }
 */
export function deBase64(val: string): string {
  return window.atob(val);
}

/**
 * @description 转unicode
 * @param { string | number | boolean } val
 * @returns { string }
 */
export function toUnicode(val: string | number | boolean): string {
  return window.encodeURIComponent(val);
}

/**
 * @description 解码unicode
 * @param { string } val value
 * @returns { string }
 */
export function deUnicode(val: string): string {
  return window.decodeURIComponent(val);
}

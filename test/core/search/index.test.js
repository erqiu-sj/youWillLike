/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-25 19:06:44
 * @LastEditTime : 2021-06-25 19:56:39
 * @FilePath     : /you-will-like/test/core/search/index.test.js
 * @Description  :
 */
const { SearchHandler } = require('../../../dist')

test('search', () => {
  expect(
    new SearchHandler({ job: 1 })
      .addNewField('iLike', 2)
      .initialization(() => ({ job: 1 }))
      .addNewField('iLike', 2)
      .rewriteField('job', 2)
      .returnParams()
  ).toStrictEqual({ job: 2, iLike: 2 })
})

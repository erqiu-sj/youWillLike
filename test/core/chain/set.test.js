/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:38:23
 * @LastEditTime: 2021-07-02 23:39:55
 * @FilePath: /you-will-like/test/core/chain/set.test.js
 * @Description: test set
 */
const { JSet } = require("../../../dist");
const realSet = new JSet();
realSet.add(1).clear().add(1);

test("has", () => {
  expect(realSet.has(1)).toStrictEqual(true);
});

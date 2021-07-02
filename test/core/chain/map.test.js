/*
 * @Author: 邱狮杰
 * @Date: 2021-07-02 23:12:31
 * @LastEditTime: 2021-07-02 23:28:19
 * @FilePath: /you-will-like/test/core/chain/map.test.js
 * @Description: test map
 */
const { JMap } = require("../../../dist");
const realMap = new JMap();
realMap.set("q", "q").set("s", "s").set("wow", "wow");

test("setClearGetValue", () => {
  expect(realMap.get("wow")).toStrictEqual("wow");
});

test("has", () => {
  expect(realMap.has("wow")).toStrictEqual(true);
});

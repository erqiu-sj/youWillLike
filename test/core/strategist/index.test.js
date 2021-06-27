/*
 * @Author: 邱狮杰
 * @Date: 2021-06-26 22:37:44
 * @LastEditTime: 2021-06-26 22:44:56
 * @FilePath: /you-will-like/test/core/strategist/index.test.js
 * @Description: 策略者
 */

const { Strategist } = require("../../../dist");
const strategist = new Strategist();
strategist
  .createStrategy("returnOne", () => 1)
  .createStrategy("returnTwo", () => 2)
  .rewritingStrategy("returnOne", () => 3);
it("testStrategist", () => {
  expect(strategist.callPolicy("returnOne")).toStrictEqual(3);
});

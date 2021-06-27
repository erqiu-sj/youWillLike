/*
 * @Author       : 邱狮杰
 * @Date         : 2021-06-25 19:06:44
 * @LastEditTime: 2021-06-26 22:35:41
 * @FilePath: /you-will-like/test/core/search/index.test.js
 * @Description  :
 */
const { SearchHandler } = require("../../../dist");
const realSearch = new SearchHandler({});
realSearch.registerHandler("editId", function ({ add, value }) {
  add("id", value);
});
realSearch.transferHandler("editId", 1);
test("search", () => {
  expect(
    realSearch.addNewField("job", 1).deleteField("id").returnParams()
  ).toStrictEqual({
    job: 1,
  });
});

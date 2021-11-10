import assert from "assert";
import { createRandomGame } from "./utils.js";

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}
describe("createRandomGame", () => {
  it("no questions ask about same flag", () => {
    const result = createRandomGame();
    let arr = Object.entries(result)
    console.log("result:",arr);
    const correctArray= []
    for (let i=0;i<arr.length;i++) {
      correctArray.push(arr[i][1].correct)
    }
    console.log("correctArray",correctArray);
    assert.equal(hasDuplicates(correctArray),false);
  });
});

import assert from "assert";
import { createRandomGame } from "./utils.js";

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}
describe("createRandomGame", () => {
  it("no questions ask about same flag", () => {
    const result = createRandomGame();
    let arr = Object.entries(result)
    const correctArray= []
    for (let i=0;i<arr.length;i++) {
      correctArray.push(arr[i][1].correct)
    }
    assert.equal(hasDuplicates(correctArray),false);
  });
  it("no answers are not same for each question", () => {
    const result = createRandomGame();
    let arrAlternatives = Object.values(result)
    const correctArray = []
    for (let i=0;i<arrAlternatives.length;i++) {
      let newResult= Object.values(arrAlternatives[i].alternatives)
      correctArray.push(newResult)
    }
    console.log("newResult",correctArray);
    for (let j = 0; j < correctArray.length; j++) {
      assert.equal(hasDuplicates(correctArray[j]),false);
    }
  });
});

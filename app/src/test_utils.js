import assert from "assert";
import { createRandomGame } from "./utils.js";

describe("createRandomGame", () => {
  it("no questions ask about same flag", () => {
    const result = createRandomGame();
    assert.deepEqual(1, 2);
  });
});

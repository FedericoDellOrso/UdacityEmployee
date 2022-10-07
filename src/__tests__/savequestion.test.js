import { _saveQuestion } from "../utils/_DATA";

describe("Test _saveQuestion", () => {
  it("Test save question correct", async () => {
    const question = {
      optionOneText: "sea",
      optionTwoText: "mountain",
      author: "zoshikanlu",
    };
    const result = await _saveQuestion(question);
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("author");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("optionOne");
    expect(result).toHaveProperty("optionTwo");
  });

  it("save question error", async () => {
    const question = {
      author: "mtsamis",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

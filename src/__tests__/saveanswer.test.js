import { _saveQuestionAnswer } from "../utils/_DATA";

describe("Test _saveQuestionAnswer", () => {
  it("Test save answer correct", async () => {
    const data = {
      authedUser: "sarahedo",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionOne",
    };
    const result = await _saveQuestionAnswer(data);
    expect(result).toEqual(true);
  });

  it("Test save answer error", async () => {
    const data = {
      quiz: "error",
      user: "Marc,",
    };
    await expect(_saveQuestionAnswer(data)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});

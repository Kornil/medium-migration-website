import { createBlockFromType, findMarkType } from "./utils";

const defaultParagraph = {
  data: {},
  nodes: [
    { leaves: [{ marks: [], object: "leaf", text: "hello" }], object: "text" }
  ],
  object: "block",
  type: "paragraph"
};

it("createBlockFromType return a paragraph if type is unknown", () => {
  const unknownType = { type: 99, text: "hello" };
  const unknownBlock = createBlockFromType(unknownType, 1);
  expect(unknownBlock.toJSON()).toEqual(defaultParagraph);
});

describe("findMarkType()", () => {
  it("returns <code> for { type: 10 }", () => {
    const codeMark = {
      end: 10,
      start: 0,
      type: 10
    };
    const mark = findMarkType(codeMark);

    expect(mark).toEqual({ data: {}, type: "code" });
  });

  it("returns undefined if invalid", () => {
    const unknownMark = {
      end: 10,
      start: 0,
      type: 99
    };
    const mark = findMarkType(unknownMark);

    expect(mark).toEqual(undefined);
  });
});

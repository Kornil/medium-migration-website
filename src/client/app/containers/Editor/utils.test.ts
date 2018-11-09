import { Block, Editor, Value } from "slate";

import {
  MediumBlock,
  MediumMark
} from "app/containers/Story/MediumStoryInterface";

import { BLOCKS } from "./constants";
import initialValue from "./initialValue";
import { createBlockFromType, findMarkType, wrappingLogic } from "./utils";

const defaultParagraph = {
  data: {},
  nodes: [
    { leaves: [{ marks: [], object: "leaf", text: "hello" }], object: "text" }
  ],
  object: "block",
  type: "paragraph"
};

const defaultListItem = {
  data: {},
  nodes: [
    { leaves: [{ marks: [], object: "leaf", text: "hello" }], object: "text" }
  ],
  object: "block",
  type: "list-item"
};

describe("createBlockFromType()", () => {
  it("returns a list-item if type is 9", () => {
    const listType: MediumBlock = {
      markups: [],
      name: "world",
      text: "hello",
      type: 9
    };
    const listBlock = createBlockFromType(listType, 1);
    expect(listBlock.toJSON()).toEqual(defaultListItem);
  });

  it("returns a paragraph if type is unknown", () => {
    const unknownType: MediumBlock = {
      markups: [],
      name: "world",
      text: "hello",
      type: 99
    };
    const unknownBlock = createBlockFromType(unknownType, 1);
    expect(unknownBlock.toJSON()).toEqual(defaultParagraph);
  });
});

describe("findMarkType()", () => {
  it("returns <code> for { type: 10 }", () => {
    const codeMark: MediumMark = {
      end: 10,
      start: 0,
      type: 10
    };
    const mark = findMarkType(codeMark);

    expect(mark).toEqual({ data: {}, type: "code" });
  });

  it("returns undefined if invalid", () => {
    const unknownMark: MediumMark = {
      end: 10,
      start: 0,
      type: 99
    };
    const mark = findMarkType(unknownMark);

    expect(mark).toEqual(undefined);
  });
});

describe("wrappingLogic()", () => {
  it("wraps list-item", () => {
    const editor = new Editor({ value: Value.fromJSON(initialValue) });
    const listBlock = Block.create(BLOCKS.LIST_ITEM);
    const spy = spyOn(editor, "wrapBlockByKey");

    // this is a type error with @types not being up to date
    // TODO send a PR to fix it
    // @ts-ignore
    editor.change(change => {
      change.insertBlock(listBlock);
    });

    wrappingLogic(editor, listBlock, 9);

    expect(spy).toHaveBeenCalled();
  });

  it("wraps second list-item", () => {
    const editor = new Editor({ value: Value.fromJSON(initialValue) });
    const firstListItem = Block.create(BLOCKS.LIST_ITEM);
    const secondListItem = Block.create(BLOCKS.LIST_ITEM);

    editor.insertBlock(firstListItem);
    editor.wrapBlockByKey(
      firstListItem.key,
      Block.create(BLOCKS.BULLETED_LIST)
    );
    editor.insertBlock(secondListItem);

    wrappingLogic(editor, secondListItem, 9);

    const wrapperBlock = editor.value.document.getClosest(
      secondListItem.key,
      () => true
    );

    if (wrapperBlock) {
      // @ts-ignore
      expect(wrapperBlock.type).toEqual("bulleted-list");
    }
  });

  it("unwraps block !== list-item && wrapped", () => {
    const editor = new Editor({ value: Value.fromJSON(initialValue) });
    const listBlock = Block.create(BLOCKS.LIST_ITEM);
    const paragraphBlock = Block.create(BLOCKS.PARAGRAPH);
    const spy = spyOn(editor, "unwrapBlockByKey");

    editor.insertBlock(listBlock);
    editor.wrapBlockByKey(listBlock.key, Block.create(BLOCKS.BULLETED_LIST));
    editor.insertBlock(paragraphBlock);

    wrappingLogic(editor, paragraphBlock, 1);

    expect(spy).toHaveBeenCalled();
  });
});

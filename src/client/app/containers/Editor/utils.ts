import { Block, BlockJSON, Editor, MarkJSON } from "slate";

import {
  MediumBlock,
  MediumMark
} from "app/containers/Story/MediumStoryInterface";

import { BLOCKS, MARKS } from "./constants";

const createTextBlock = (type: string, text: string): BlockJSON => ({
  nodes: [
    {
      leaves: [
        {
          text
        }
      ],
      object: "text"
    }
  ],
  object: "block",
  type
});

// take a Medium block and convert it into a Slate block
export const createBlockFromType = (block: MediumBlock, i: number): Block => {
  switch (block.type) {
    case 1:
      return Block.fromJSON(createTextBlock(BLOCKS.PARAGRAPH, block.text));
    case 3:
      return Block.fromJSON(createTextBlock(BLOCKS.HEADING_ONE, block.text));
    case 13:
      return i === 1
        ? Block.fromJSON(createTextBlock(BLOCKS.HEADING_TWO, block.text))
        : Block.fromJSON(createTextBlock(BLOCKS.HEADING_THREE, block.text));
    case 8:
      return Block.fromJSON(createTextBlock(BLOCKS.BLOCK_QUOTE, block.text));
    case 9:
      return Block.fromJSON(createTextBlock(BLOCKS.LIST_ITEM, block.text));
    case 4:
      return Block.create({
        data: {
          isMainImage: i === 2,
          name: block.name,
          src: "https://cdn-images-1.medium.com/max/1280/" + block.metadata.id,
          text: block.text
        },
        type: BLOCKS.IMAGE
      });
    default:
      return Block.fromJSON(createTextBlock(BLOCKS.PARAGRAPH, block.text));
  }
};

// Map the type of Medium's marks to slate marks
export const findMarkType = (mark: MediumMark): MarkJSON | undefined => {
  switch (mark.type) {
    case 10:
      return { type: MARKS.CODE, data: {} };
    case 3:
      return { type: MARKS.LINK, data: { href: mark.href } };
    case 2:
      return { type: MARKS.ITALIC, data: {} };
    case 1:
      return { type: MARKS.BOLD, data: {} };
    default:
      return undefined;
  }
};

export const wrappingLogic = (editor: Editor, block: Block, type: number) => {
  if (type === 9) {
    if (editor.value.document.getClosest(block.key, () => true) === null) {
      editor.wrapBlockByKey(block.key, Block.create(BLOCKS.BULLETED_LIST));
    }
  } else {
    if (editor.value.document.getClosest(block.key, () => true)) {
      editor.unwrapBlockByKey(block.key, BLOCKS.BULLETED_LIST);
    }
  }
};

import { Block, BlockJSON, MarkJSON } from "slate";

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

export const createBlockFromType = (block: any, i: number): Block => {
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

export const findMarkType = (mark: any): MarkJSON | undefined => {
  switch (mark.type) {
    case 10:
      return { type: MARKS.CODE, data: {} };
    case 3:
      return { type: MARKS.LINK, data: { href: mark.href } };
    case 2:
      return { type: MARKS.ITALIC, data: {} };
    case 1:
      return { type: MARKS.BOLD, data: {} };
  }
  return undefined;
};

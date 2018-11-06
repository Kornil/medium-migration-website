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

interface MediumTextBlock {
  name: string;
  // 0 only exists for the default case
  type: 1 | 3 | 13 | 8 | 99;
  text: string;
  markups: MediumMark[];
}

interface MediumImageBlock {
  name: string;
  type: 4;
  layout: number;
  text: string;
  markups: MediumMark[];
  metadata: {
    id: string;
    originalWidth: number;
    originalHeight: number;
  };
}

export type MediumBlock = MediumTextBlock | MediumImageBlock;

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

interface MediumDefaultMark {
  type: 10 | 2 | 1 | 99;
  start: number;
  end: number;
}

interface MediumLinkMark {
  type: 3;
  start: number;
  end: number;
  href: string;
  title: string;
  rel: string;
  anchorType: number;
}

export type MediumMark = MediumDefaultMark | MediumLinkMark;

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

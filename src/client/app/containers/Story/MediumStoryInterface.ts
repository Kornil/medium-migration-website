import { ValueJSON } from "slate";

// Medium Block structure
interface MediumTextBlock {
  name: string;
  // 99 only exists for the default case
  type: 1 | 3 | 13 | 8 | 9 | 99;
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

// Medium Mark structure
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

// Full Medium interface
export interface MediumStoryInterface {
  content: MediumBlock[];
  mediumUrl: string;
  firstPublishedAt: number;
  cached?: ValueJSON;
}

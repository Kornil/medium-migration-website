/* eslint-disable import/no-extraneous-dependencies */

import { createHyperscript } from "slate-hyperscript";

const h = createHyperscript({
  blocks: {
    paragraph: "paragraph",
    "block-quote": "block-quote",
    // Lists
    "bulleted-list": "bulleted-list",
    "numbered-list": "numbered-list",
    "list-item": "list-item",
    // Headings
    "heading-one": "heading-one",
    "heading-two": "heading-two",
    "heading-three": "heading-three",
    // image
    image: "image",

    "invalid-block": "invalid-block"
  },
  marks: {
    bold: "bold",
    code: "code",
    italic: "italic",
    link: "link",
    underlined: "underlined",

    "invalid-mark": "invalid-mark"
  }
});

export default h;

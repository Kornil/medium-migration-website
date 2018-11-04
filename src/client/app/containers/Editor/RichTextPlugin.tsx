import React from "react";
import { Plugin } from "slate-react";

import { BLOCKS } from "./constants";

type RichTextPluginInterface = () => Plugin;

const RichTextPlugin: RichTextPluginInterface = () => {
  return {
    renderNode: (props, editor, next) => {
      const { attributes, children, node } = props;
      switch (node.type) {
        case BLOCKS.BLOCK_QUOTE:
          return <blockquote {...attributes}>{children}</blockquote>;
        case BLOCKS.BULLETED_LIST:
          return <ul {...attributes}>{children}</ul>;
        case BLOCKS.HEADING_ONE:
          return <h1 {...attributes}>{children}</h1>;
        case BLOCKS.HEADING_TWO:
          return <h2 {...attributes}>{children}</h2>;
        case BLOCKS.HEADING_THREE:
          return <h3 {...attributes}>{children}</h3>;
        case "list-item":
        case BLOCKS.LIST_ITEM:
          return <li {...attributes}>{children}</li>;
        case BLOCKS.NUMBERED_LIST:
          return <ol {...attributes}>{children}</ol>;
        case BLOCKS.PARAGRAPH:
          return <p {...attributes}>{children}</p>;
        default:
          return next();
      }
    },

    renderMark: (props, editor, next) => {
      const { children, mark, attributes } = props;

      switch (mark.type) {
        case "bold":
          return <strong {...attributes}>{children}</strong>;
        case "code":
          return <code {...attributes}>{children}</code>;
        case "italic":
          return <em {...attributes}>{children}</em>;
        case "underlined":
          return <u {...attributes}>{children}</u>;
        default:
          return next();
      }
    }
  };
};

export default RichTextPlugin;

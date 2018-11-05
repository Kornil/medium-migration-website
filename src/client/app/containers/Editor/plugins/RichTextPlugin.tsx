import React from "react";
import { Plugin } from "slate-react";

import { BLOCKS, MARKS } from "../constants";

type RichTextPluginInterface = () => Plugin;

const RichTextPlugin: RichTextPluginInterface = () => {
  return {
    renderNode: (props, {}, next) => {
      const { attributes, children, node } = props;
      // here until https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30186/ gets sorted
      // istanbul ignore next
      if (node.object === "block" || node.object === "inline") {
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
          case BLOCKS.IMAGE:
            const { data } = node;
            return (
              <figure {...attributes}>
                <img
                  src={data.get("src")}
                  alt={data.get("name")}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%"
                  }}
                />
                <figcaption>{data.get("text")}</figcaption>
              </figure>
            );
          case BLOCKS.LIST_ITEM:
            return <li {...attributes}>{children}</li>;
          case BLOCKS.NUMBERED_LIST:
            return <ol {...attributes}>{children}</ol>;
          case BLOCKS.PARAGRAPH:
            return <p {...attributes}>{children}</p>;
          default:
            return next();
        }
      }
    },

    renderMark: (props, {}, next) => {
      const { children, mark, attributes } = props;
      const { data } = mark;
      switch (mark.type) {
        case MARKS.BOLD:
          return <strong {...attributes}>{children}</strong>;
        case MARKS.CODE:
          return <code {...attributes}>{children}</code>;
        case MARKS.ITALIC:
          return <em {...attributes}>{children}</em>;
        case MARKS.LINK:
          return (
            <a href={data.get("href")} {...attributes}>
              {children}
            </a>
          );
        case MARKS.UNDERLINED:
          return <u {...attributes}>{children}</u>;
        default:
          return next();
      }
    }
  };
};

export default RichTextPlugin;

import React, { Component } from "react";
import { Block, BlockJSON, MarkJSON, Range, Value } from "slate";
import { Editor } from "slate-react";

import { BLOCKS, MARKS } from "./constants";
import initialValue from "./initialValue";
import StyledEditor from "./StyledEditor";

import RichTextPlugin from "./plugins/RichTextPlugin";

const plugins = [RichTextPlugin()];

interface EditorWrapperProps {
  mediumValue: any;
}

interface EditorWrapperState {
  value: Value;
}

const createBlock = (type: string, text: string): BlockJSON => ({
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

const findMarkType = (mark: any): MarkJSON | undefined => {
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

class EditorWrapper extends Component<EditorWrapperProps, EditorWrapperState> {
  private editor = createRef<Editor>();

  constructor(props: EditorWrapperProps) {
    super(props);
    this.state = {
      value: Value.fromJSON(initialValue)
    };
  }

  componentDidMount() {
    this.MediumToSlateConverter();
  }

  onChange = ({ value }: { value: Value }) => {
    this.setState({ value });
  };

  MediumToSlateConverter = () => {
    const { paragraphs } = this.props.mediumValue.bodyModel;
    const { editor } = this;
    if (editor) {
      paragraphs.forEach((block: any, i: number) => {
        switch (block.type) {
          case 1:
            const paragraph = Block.fromJSON(
              createBlock(BLOCKS.PARAGRAPH, block.text)
            );
            editor.insertBlock(paragraph);

            // Add markup logic
            if (block.markups.length) {
              const firstNode = paragraph.nodes.first();
              block.markups.forEach((mark: any) => {
                const range = Range.fromJSON({
                  anchor: {
                    key: firstNode.key,
                    object: "point",
                    offset: mark.start
                  },
                  focus: {
                    key: firstNode.key,
                    object: "point",
                    offset: mark.end
                  }
                });
                const type = findMarkType(mark);
                editor.addMarkAtRange(range, type);
              });
            }
            break;
          case 3:
            const headingOne = Block.fromJSON(
              createBlock(BLOCKS.HEADING_ONE, block.text)
            );
            // logic for removing first editor block (empty paragraph) for title
            if (i === 0) {
              editor.setBlocks(BLOCKS.HEADING_ONE);
              editor.insertText(block.text);
            } else {
              editor.insertBlock(headingOne);
            }
            break;
          case 13:
            if (i === 1) {
              const headingTwo = Block.fromJSON(
                createBlock(BLOCKS.HEADING_TWO, block.text)
              );
              editor.insertBlock(headingTwo);
            } else {
              const headingThree = Block.fromJSON(
                createBlock(BLOCKS.HEADING_THREE, block.text)
              );
              editor.insertBlock(headingThree);
            }
            break;
          case 8:
            const blockQuote = Block.fromJSON(
              createBlock(BLOCKS.BLOCK_QUOTE, block.text)
            );
            editor.insertBlock(blockQuote);
            break;
          case 4:
            const image = Block.create({
              data: {
                isMainImage: i === 2,
                name: block.name,
                src:
                  "https://cdn-images-1.medium.com/max/1280/" +
                  block.metadata.id,
                text: block.text
              },
              type: BLOCKS.IMAGE
            });
            editor.insertBlock(image);
            break;
        }
      });
    }
  };

  render() {
    return (
      <StyledEditor>
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          plugins={plugins}
          ref={this.editor}
          readOnly
        />
      </StyledEditor>
    );
  }
}

export default EditorWrapper;

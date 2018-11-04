import React, { Component } from "react";
import { Block, BlockJSON, Value } from "slate";
import { Editor } from "slate-react";

import { BLOCKS } from "./constants";
import initialValue from "./initialValue";

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

class EditorWrapper extends Component<EditorWrapperProps, EditorWrapperState> {
  editor: null | React.ReactNode = null;

  constructor(props: EditorWrapperProps) {
    super(props);
    this.state = {
      value: Value.fromJSON(initialValue)
    };
  }

  componentDidMount() {
    this.MediumToSlateConverter();
  }

  setEditorRef = (element: React.ReactNode) => {
    this.editor = element;
  };

  onChange = ({ value }: { value: Value }) => {
    this.setState({ value });
  };

  MediumToSlateConverter = () => {
    const { paragraphs } = this.props.mediumValue.bodyModel;
    const { editor } = this;
    paragraphs.forEach((block: any, i: number) => {
      switch (block.type) {
        case 1:
          if (block.text) {
            const paragraph = Block.fromJSON(
              createBlock(BLOCKS.PARAGRAPH, block.text)
            );
            editor.insertBlock(paragraph);
          }
          break;
        case 3:
          const headingOne = Block.fromJSON(
            createBlock(BLOCKS.HEADING_ONE, block.text)
          );
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
                "https://cdn-images-1.medium.com/max/1280/" + block.metadata.id,
              text: block.text
            },
            type: BLOCKS.IMAGE
          });
          editor.insertBlock(image);
          break;
      }
    });
  };

  render() {
    return (
      <div>
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          plugins={plugins}
          ref={this.setEditorRef}
          readOnly
        />
      </div>
    );
  }
}

export default EditorWrapper;

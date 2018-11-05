import React, { Component, createRef } from "react";
import { Range, Value } from "slate";
import { Editor } from "slate-react";

import { createBlockFromType, findMarkType } from "./utils";

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
    const editor = this.editor.current;
    paragraphs.forEach((block: any, i: number) => {
      const slateBlock = createBlockFromType(block, i);
      if (i === 0) {
        // @ts-ignore
        editor.setBlocks(slateBlock.type).insertText(block.text);
      } else {
        // @ts-ignore
        editor.insertBlock(slateBlock);
      }

      if (block.markups.length) {
        const firstNode = slateBlock.nodes.first();
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
          // @ts-ignore
          editor.addMarkAtRange(range, type);
        });
      }
    });
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

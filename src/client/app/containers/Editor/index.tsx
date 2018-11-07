import React, { Component, createRef } from "react";
import { Range, Value } from "slate";
import { Editor } from "slate-react";

import { createBlockFromType, findMarkType } from "./utils";

import initialValue from "./initialValue";
import StyledEditor from "./StyledEditor";

import RichTextPlugin from "./plugins/RichTextPlugin";

const plugins = [RichTextPlugin()];

interface EditorWrapperProps {
  cached: boolean;
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
      value: props.cached
        ? Value.fromJSON(props.mediumValue.content)
        : Value.fromJSON(initialValue)
    };
  }

  componentDidMount() {
    if (!this.props.cached) {
      this.MediumToSlateConverter();
    }
  }

  componentWillUnmount() {
    this.setState = () => undefined;
  }

  onChange = ({ value }: { value: Value }) => {
    this.setState({ value });
  };

  MediumToSlateConverter = () => {
    const { mediumValue } = this.props;
    const { content: paragraphs } = mediumValue;
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

      // if markup is present on the node
      // apply it to the specified range
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
    localStorage.setItem(
      mediumValue.mediumUrl,
      JSON.stringify({
        // @ts-ignore
        content: editor.value,
        firstPublishedAt: mediumValue.firstPublishedAt,
        mediumUrl: mediumValue.mediumUrl
      })
    );
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

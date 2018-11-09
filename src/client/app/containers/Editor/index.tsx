import React, { Component, createRef } from "react";
import { Range, Value } from "slate";
import { Editor } from "slate-react";

import { MediumStoryInterface } from "app/containers/Story/MediumStoryInterface";
import {
  MediumBlock,
  MediumMark
} from "app/containers/Story/MediumStoryInterface";

import { createBlockFromType, findMarkType, wrappingLogic } from "./utils";

import initialValue from "./initialValue";
import StyledEditor from "./StyledEditor";

import RichTextPlugin from "./plugins/RichTextPlugin";

const plugins = [RichTextPlugin()];

interface EditorWrapperProps {
  story: MediumStoryInterface;
}

interface EditorWrapperState {
  value: Value;
}

class EditorWrapper extends Component<EditorWrapperProps, EditorWrapperState> {
  private editor = createRef<Editor>();

  constructor(props: EditorWrapperProps) {
    super(props);
    this.state = {
      value: props.story.cached
        ? Value.fromJSON(props.story.cached)
        : Value.fromJSON(initialValue)
    };
  }

  componentDidMount() {
    if (!this.props.story.cached) {
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
    const { story } = this.props;
    const { content: paragraphs } = story;
    const editor = this.editor.current;
    paragraphs.forEach((block: MediumBlock, i: number) => {
      const slateBlock = createBlockFromType(block, i);
      // first block is added by removing the default block
      // at the beginning of document
      if (i === 0) {
        // @ts-ignore
        editor.setBlocks(slateBlock.type).insertText(block.text);
      } else {
        // @ts-ignore
        editor.insertBlock(slateBlock);
      }

      // @ts-ignore
      wrappingLogic(editor, slateBlock, block.type);

      // if markup is present on the node
      // apply it to the specified range
      if (block.markups.length && slateBlock.nodes.first()) {
        const firstNode = slateBlock.nodes.first();
        block.markups.forEach((mark: MediumMark) => {
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
      story.mediumUrl,
      JSON.stringify({
        ...story,
        // @ts-ignore
        cached: editor.value
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

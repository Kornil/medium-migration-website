import React, { Component } from "react";
import { Value } from "slate";
import { Editor } from "slate-react";

import initialValue from "./initialValue";
import RichTextPlugin from "./RichTextPlugin";

const plugins = [RichTextPlugin()];

interface EditorWrapperProps {
  mediumValue: any;
}

interface EditorWrapperState {
  value: Value;
}

class EditorWrapper extends Component<EditorWrapperProps, EditorWrapperState> {
  state = {
    value: Value.fromJSON(initialValue)
  };

  onChange = ({ value }: { value: Value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          plugins={plugins}
        />
      </div>
    );
  }
}

export default EditorWrapper;

/** @jsx h */
import h from "../h";

export const input = (
  <value>
    <document>
      <heading-three>Some text</heading-three>
    </document>
  </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <h3>
        <span>
            <span>Some text</span>
        </span>
    </h3>
</div>
`.trim();

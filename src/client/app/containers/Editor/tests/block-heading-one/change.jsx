/** @jsx h */
import h from "../h";

export const input = (
  <value>
    <document>
      <heading-one>Some text</heading-one>
    </document>
  </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <h1>
        <span>
            <span>
                <span>Some text</span>
            </span>
        </span>
    </h1>
</div>
`.trim();

/** @jsx h */
import h from "../h";

export const input = (
  <value>
    <document>
      <bulleted-list>
        <list-item>Some text</list-item>
      </bulleted-list>
    </document>
  </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <ul>
        <li>
            <span>
                <span>
                    <span>Some text</span>
                </span>
            </span>
        </li>
    </ul>
</div>
`.trim();

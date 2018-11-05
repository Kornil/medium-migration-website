/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <invalid-block>Some text</invalid-block>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <div>
        <span>
            <span>
                <span>Some text</span>
            </span>
        </span>
    </div>
</div>
`.trim();

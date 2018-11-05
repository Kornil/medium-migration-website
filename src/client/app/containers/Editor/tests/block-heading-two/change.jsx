/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <heading-two>Some text</heading-two>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <h2>
        <span>
            <span>
                <span>Some text</span>
            </span>
        </span>
    </h2>
</div>
`.trim();

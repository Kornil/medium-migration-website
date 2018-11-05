/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <paragraph>
                <underlined>Some text</underlined>
            </paragraph>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <p>
        <span>
            <span>
                <u><span>Some text</span></u>
            </span>
        </span>
    </p>
</div>
`.trim();

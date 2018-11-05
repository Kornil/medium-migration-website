/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <paragraph>
                <code>Some text</code>
            </paragraph>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <p>
        <span>
            <span>
                <code><span>Some text</span></code>
            </span>
        </span>
    </p>
</div>
`.trim();

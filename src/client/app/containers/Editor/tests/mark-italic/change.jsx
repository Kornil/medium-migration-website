/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <paragraph>
                <italic>Some text</italic>
            </paragraph>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <p>
        <span>
            <span>
                <em><span>Some text</span></em>
            </span>
        </span>
    </p>
</div>
`.trim();

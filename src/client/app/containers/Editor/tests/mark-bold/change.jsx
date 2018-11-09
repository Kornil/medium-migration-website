/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <paragraph>
                <bold>Some text</bold>
            </paragraph>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <p>
        <span>
            <span>
                <strong><span>Some text</span></strong>
            </span>
        </span>
    </p>
</div>
`.trim();

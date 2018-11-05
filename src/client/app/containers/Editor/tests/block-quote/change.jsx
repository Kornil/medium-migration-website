/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <block-quote>Some text</block-quote>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <blockquote>
        <span>
            <span>
                <span>Some text</span>
            </span>
        </span>
    </blockquote>
</div>
`.trim();

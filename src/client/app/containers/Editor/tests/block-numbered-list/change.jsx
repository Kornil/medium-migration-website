/** @jsx h */
import h from '../h';

export const input = (
    <value>
        <document>
            <numbered-list>
                <list-item>Some text</list-item>
            </numbered-list>
        </document>
    </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <ol>
        <li>
        <span>
            <span>
                <span>Some text</span>
            </span>
        </span>
        </li>
    </ol>
</div>
`.trim();

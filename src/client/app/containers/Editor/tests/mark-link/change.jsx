/** @jsx h */
import h from "../h";

export const input = (
  <value>
    <document>
      <paragraph>
        <link href="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg">
          Some text
        </link>
      </paragraph>
    </document>
  </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
    <p>  
        <span>
            <span>
                <a href="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"><span>Some text</span></a>
            </span>
        </span>
    </p>
</div>
`.trim();

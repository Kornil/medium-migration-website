/** @jsx h */
import h from "../h";

export const input = (
  <value>
    <document>
      <image
        name="hello"
        src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"
        text="hello text"
      />
    </document>
  </value>
);

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
  <figure>
    <img
      src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"
      alt="hello"
    />
    <figcaption>hello text</figcaption>
  </figure>
</div>
`.trim();

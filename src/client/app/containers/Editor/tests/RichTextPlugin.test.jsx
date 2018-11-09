import fs from "fs";
import { JSDOM } from "jsdom";
import path from "path";
import React from "react";
import ReactDOM from "react-dom/server";
import { Editor } from "slate-react";

import RichTextPlugin from "../plugins/RichTextPlugin";

import clean from "./clean";

const plugins = [RichTextPlugin()];

describe("rich text plugin", () => {
  const tests = fs.readdirSync(__dirname);

  tests.forEach(test => {
    if (test[0] === "." || path.extname(test).length > 0) return;

    it(test, () => {
      const dir = path.resolve(__dirname, test);

      const { input, output } = require(path.resolve(dir, "change"));

      const editorOutput = ReactDOM.renderToStaticMarkup(
        <Editor value={input} onChange={() => {}} plugins={plugins} />
      );
      const dom = JSDOM.fragment(output);
      const expected = dom.firstChild.outerHTML
        .trim()
        .replace(/\n/gm, "")
        .replace(/>\s*</g, "><");

      expect(clean(editorOutput)).toEqual(expected);
    });
  });
});

import { JSDOM } from "jsdom";

const UNWANTED_ATTRS = [
  "data-key",
  "data-offset-key",
  "data-slate-leaf",
  "style"
];

const UNWANTED_TOP_LEVEL_ATTRS = [
  "autocorrect",
  "spellcheck",
  "style",
  "data-gramm"
];

function stripUnwantedAttrs(element) {
  if (typeof element.removeAttribute === "function") {
    UNWANTED_ATTRS.forEach(attr => element.removeAttribute(attr));

    if (element.parentNode.nodeName === "#document-fragment") {
      UNWANTED_TOP_LEVEL_ATTRS.forEach(attr => element.removeAttribute(attr));
    }
  }

  if (element.childNodes.length) {
    element.childNodes.forEach(stripUnwantedAttrs);
  }

  if (element.nodeName === "#text") {
    element.textContent = element.textContent.trim();
  }

  return element;
}

export default function clean(html) {
  const $ = JSDOM.fragment(html);
  $.childNodes.forEach(stripUnwantedAttrs);
  return $.firstChild.outerHTML;
}

<script>
import prism from 'prismjs'

export default {
  props: {
    language: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      default: `console.log('heoll would')`
    },
    darkMode: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      copySuccess: false,
    }
  },
  computed: {
    content() {
      return prism.highlight(this.code, prism.languages[this.language], this.language)
    },
  },
  methods: {
    async copy() {
      await navigator.clipboard.writeText(this.code)
      this.copySuccess = true

      setTimeout(() => {
        this.copySuccess = false
      }, 3000)
    },
  },
}
</script>

<template>
  <div :class="['code-block', darkMode ? 'code-block-dark' : 'code-block-light']">

    <svg v-if="copySuccess" width="16" height="16" viewBox="0 0 36 36"><path fill="#2dd4bf" d="M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
    <svg @click="copy" v-else width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"/></svg>

    <pre :class="[`language-${language}`]"><code :class="[`language-${language}`]" v-html="content"></code></pre>
  </div>
</template>

<style lang="scss">
.code-block {
  position: relative;
  color: var(--prism-foreground);

  svg {
    opacity: 0;
    transition: .3s all linear;

    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }

  &-light {
    --prism-scheme: light;
    --prism-foreground: #6e6e6e;
    --prism-background: #f4f4f4;
    --prism-comment: #a8a8a8;
    --prism-string: #555555;
    --prism-literal: #333333;
    --prism-keyword: #000000;
    --prism-function: #4f4f4f;
    --prism-deleted: #333333;
    --prism-class: #333333;
    --prism-builtin: #757575;
    --prism-property: #121111;
    --prism-namespace: #4f4f4f;
    --prism-punctuation: #ababab;
    --prism-decorator: var(--prism-class);
    --prism-operator: var(--prism-punctuation);
    --prism-number: var(--prism-literal);
    --prism-boolean: var(--prism-literal);
    --prism-variable: var(--prism-literal);
    --prism-constant: var(--prism-literal);
    --prism-symbol: var(--prism-literal);
    --prism-interpolation: var(--prism-literal);
    --prism-selector: var(--prism-keyword);
    --prism-keyword-control: var(--prism-keyword);
    --prism-regex: var(--prism-string);
    --prism-json-property: var(--prism-property);
    --prism-inline-background: var(--prism-background);
    --prism-comment-style: italic;
    --prism-url-decoration: underline;
    --prism-line-number: #a5a5a5;
    --prism-line-number-gutter: #333333;
    --prism-line-highlight-background: #eeeeee;
    --prism-selection-background: #dddddd;
    --prism-marker-color: var(--prism-foreground);
    --prism-marker-opacity: .4;
    --prism-marker-font-size: .8em;
    --prism-font-size: 1em;
    --prism-line-height: 1.5em;
    --prism-font-family: monospace;
    --prism-inline-font-size: var(--prism-font-size);
    --prism-block-font-size: var(--prism-font-size);
    --prism-tab-size: 2;
    --prism-block-padding-x: 1em;
    --prism-block-padding-y: 1em;
    --prism-block-margin-x: 0;
    --prism-block-margin-y: .5em;
    --prism-block-radius: .3em;
    --prism-inline-padding-x: .3em;
    --prism-inline-padding-y: .1em;
    --prism-inline-radius: .3em;
  }

  &-dark {
    --prism-scheme: dark;
    --prism-foreground: #d4cfbf;
    --prism-background: #1e1e1e;
    --prism-comment: #758575;
    --prism-string: #d48372;
    --prism-literal: #429988;
    --prism-keyword: #4d9375;
    --prism-function: #a1b567;
    --prism-deleted: #a14f55;
    --prism-class: #54b1bf;
    --prism-builtin: #e0a569;
    --prism-property: #dd8e6e;
    --prism-namespace: #db889a;
    --prism-punctuation: #858585;
    --prism-decorator: #bd8f8f;
    --prism-operator: var(--prism-punctuation);
    --prism-number: #6394bf;
    --prism-boolean: #1c6b48;
    --prism-variable: #c2b36e;
    --prism-constant: var(--prism-literal);
    --prism-symbol: var(--prism-literal);
    --prism-interpolation: var(--prism-literal);
    --prism-selector: var(--prism-keyword);
    --prism-keyword-control: var(--prism-keyword);
    --prism-regex: #ab5e3f;
    --prism-json-property: #6b8b9e;
    --prism-inline-background: var(--prism-background);
    --prism-comment-style: italic;
    --prism-url-decoration: underline;
    --prism-line-number: #888888;
    --prism-line-number-gutter: #eeeeee;
    --prism-line-highlight-background: #444444;
    --prism-selection-background: #444444;
    --prism-marker-color: var(--prism-foreground);
    --prism-marker-opacity: 0.4;
    --prism-marker-font-size: 0.8em;
    --prism-font-size: 1em;
    --prism-line-height: 1.5em;
    --prism-font-family: monospace;
    --prism-inline-font-size: var(--prism-font-size);
    --prism-block-font-size: var(--prism-font-size);
    --prism-tab-size: 2;
    --prism-block-padding-x: 1em;
    --prism-block-padding-y: 1em;
    --prism-block-margin-x: 0;
    --prism-block-margin-y: 0.5em;
    --prism-block-radius: 0.3em;
    --prism-inline-padding-x: 0.3em;
    --prism-inline-padding-y: 0.1em;
    --prism-inline-radius: 0.3em;
  }
  
  pre[class*=language-],
  code[class*=language-] {
    font-size: var(--prism-font-size);
    font-family: var(--prism-font-family);
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: var(--prism-line-height);
    -moz-tab-size: var(--prism-tab-size);
    -o-tab-size: var(--prism-tab-size);
    tab-size: var(--prism-tab-size);
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    color: var(--prism-foreground);
  }
  
  pre[class*=language-] {
    font-size: var(--prism-block-font-size);
    padding: var(--prism-block-padding-y) var(--prism-block-padding-x);
    margin: var(--prism-block-margin-y) var(--prism-block-margin-x);
    border-radius: var(--prism-block-radius);
    overflow: auto;
    background: var(--prism-background);
  }
  
  :not(pre)>code[class*=language-] {
    font-size: var(--prism-inline-font-size);
    padding: var(--prism-inline-padding-y) var(--prism-inline-padding-x);
    border-radius: var(--prism-inline-radius);
    background: var(--prism-inline-background);
  }
  
  pre[class*=language-]::-moz-selection,
  pre[class*=language-] ::-moz-selection,
  code[class*=language-]::-moz-selection,
  code[class*=language-] ::-moz-selection {
    background: var(--prism-selection-background);
  }
  
  pre[class*=language-]::selection,
  pre[class*=language-] ::selection,
  code[class*=language-]::selection,
  code[class*=language-] ::selection {
    background: var(--prism-selection-background);
  }
  
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--prism-comment);
    font-style: var(--prism-comment-style);
  }
  
  .token.namespace {
    color: var(--prism-namespace);
  }
  
  .token.interpolation {
    color: var(--prism-interpolation);
  }
  
  .token.string {
    color: var(--prism-string);
  }
  
  .token.punctuation {
    color: var(--prism-punctuation);
  }
  
  .token.operator {
    color: var(--prism-operator);
  }
  
  .token.keyword.module,
  .token.keyword.control-flow {
    color: var(--prism-keyword-control);
  }
  
  .token.url,
  .token.symbol,
  .token.inserted {
    color: var(--prism-symbol);
  }
  
  .token.constant {
    color: var(--prism-constant);
  }
  
  .token.string.url {
    text-decoration: var(--prism-url-decoration);
  }
  
  .token.boolean,
  .language-json .token.boolean {
    color: var(--prism-boolean);
  }
  
  .token.number,
  .language-json .token.number {
    color: var(--prism-number);
  }
  
  .token.variable {
    color: var(--prism-variable);
  }
  
  .token.keyword {
    color: var(--prism-keyword);
  }
  
  .token.atrule,
  .token.attr-value,
  .token.selector {
    color: var(--prism-selector);
  }
  
  .token.function {
    color: var(--prism-function);
  }
  
  .token.deleted {
    color: var(--prism-deleted);
  }
  
  .token.important,
  .token.bold {
    font-weight: 700
  }
  
  .token.italic {
    font-style: italic
  }
  
  .token.class-name {
    color: var(--prism-class);
  }
  
  .token.tag,
  .token.builtin {
    color: var(--prism-builtin);
  }
  
  .token.attr-name,
  .token.property,
  .token.entity {
    color: var(--prism-property);
  }
  
  .language-json .token.property {
    color: var(--prism-json-property);
  }
  
  .token.regex {
    color: var(--prism-regex);
  }
  
  .token.decorator,
  .token.annotation {
    color: var(--prism-decorator);
  }
  
  .line-numbers .line-numbers-rows {
    border-right-color: var(--prism-line-number);
  }
  
  .line-numbers-rows>span:before {
    color: var(--prism-line-number-gutter);
  }
  
  .line-highlight {
    background: var(--prism-line-highlight-background);
  }
}
</style>
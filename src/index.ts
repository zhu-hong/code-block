import { defineComponent, h } from 'vue-demi'
import prism from 'prismjs'

export const CodeBlock = defineComponent({
  props: {
    language: {
      type: String,
      default: 'javascript',
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
  methods: {
    async copy() {
      console.log(1) 
      await navigator.clipboard.writeText(this.code)
      this.copySuccess = true

      setTimeout(() => {
        this.copySuccess = false
      }, 3000)
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
  render() {
    return h(
      'div',
      {
        class: [
          'code-block',
          this.darkMode ? 'code-block-dark' : 'code-block-light',
        ],
      },
      [
        this.copySuccess
        ?
        h(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 36 36',
          },
          [
            h(
              'path',
              {
                fill: '#2dd4bf',
                d: 'M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z',
              },
            ),
            h(
              'path',
              {
                fill: 'none',
                d: 'M0 0h36v36H0z',
              },
            ),
          ],
        )
        :
        h(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 32 32',
            onClick: () => this.copy(),
          },
          [
            h(
              'path',
              {
                fill: 'currentColor',
                d: 'M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z',
              },
            ),
            h(
              'path',
              {
                fill: 'currentColor',
                d: 'M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z',
              },
            ),
          ],
        ),
        h(
          'pre',
          {
            class: `language-${this.language}`,
          },
          [
            h(
              'code',
              {
                class: `language-${this.language}`,
                innerHTML: this.content,
              },
            )
          ],
        )
      ],
    )
  },
})
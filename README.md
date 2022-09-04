# VUE2 CodeBlock Component

## install

```bash
pnpm install @zhu-hong/code-block
```

## usage
```vue
<script>
import CodeBlock from '@zhu-hong/code-block'
import cfg from '../../vite.config?raw'

export default {
  components: {
    CodeBlock,
  },
  data() {
    return {
      code: cfg,
    }
  },
}
</script>

<template>
  <main class="w-screen h-screen flex justify-center items-center bg-gray-900 text-white">
    <CodeBlock language="js" :code="code" :darkMode="true" class="min-w-1/2" />
  </main>
</template>

```
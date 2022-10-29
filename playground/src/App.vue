<script setup>
import { CodeBlock } from '../../src/index'
import cfg from '../../vite.config?raw'
import '../../style.css'
</script>

<template>
  <main class="w-screen h-screen flex justify-center items-center bg-gray-900 text-white">
    <CodeBlock :code="cfg" class="min-w-1/2" />
  </main>
</template>

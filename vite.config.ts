import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'

export default defineConfig({
  root: 'playground',
  plugins: [
    vue(),
    unocss({
      presets: [
        presetWind(),
      ],
      include: ['playground/**/*'],
    }),
  ],
  server: {
    open: true,
  },
})

/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  // GitHub Pages serves this as a project site under /cloning-vat/; the
  // Docker/nginx build serves it at the domain root, so only opt into the
  // subpath when building for Pages.
  base: process.env.GH_PAGES ? '/cloning-vat/' : '/',
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
})

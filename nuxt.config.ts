// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias : {
    "@": resolve(__dirname, "/"),
    "config": resolve(__dirname,"config.js")
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-tiptap-editor'],
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
  
  // router: {
  //   middleware: ['auth']
  // },
})
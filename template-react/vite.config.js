import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    // Inline every imported asset (photos included) as a data: URI so the
    // production build is one self-contained dist/index.html — same
    // "open it anywhere, send it as one file" convenience as demos/_template,
    // just with Framer Motion's JS-driven transitions.
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false,
  },
})

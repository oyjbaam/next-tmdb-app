// import { defineConfig } from 'vitest/config'
// import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   test: {
//     environment: 'jsdom',
//     globals: true,
//     setupFiles: './setupTests.ts',
//     alias: {
//       '@/': new URL('./app', import.meta.url).pathname,
//     },
//   },
// })
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})

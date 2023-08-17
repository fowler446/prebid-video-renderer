import { resolve } from 'path'

export default {
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Prebid Video Renderer',
      fileName: 'main.js',
    }
  }
}

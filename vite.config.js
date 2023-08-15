import { resolve } from 'path'

export default {
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'prebid video renderer',
      // the proper extensions will be added
      fileName: 'index',
    }
  }
}

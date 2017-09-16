import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import cssurl from 'postcss-url';
import copy from 'rollup-plugin-copy';
import browsersync from 'rollup-plugin-browsersync'

export default {
  input: 'src/index.js',
  output: {
    file: 'app/index.js',
    format: 'iife'
  },
  sourcemap: 'inline',
  plugins: [
    // js files
    vue(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }),
    resolve({ browser: true }),
    uglify({}, minify),
    // css (+font) files
    postcss({
      sourceMap: 'inline',
      extract : true,
      plugins: [
        cssnano(),
        cssurl({
          url: 'inline'
        })
      ]
    }),
    // copy static resources
    copy({
      "src/index.html": "app/index.html",
      "src/favicon.ico": "app/favicon.ico",
    }),
    browsersync({
      server: 'app',
      port: 80,
      watchOptions: {
        usePolling: true
      },
      open: false
  })
  ],
  watch: {
    chokidar: { usePolling: true }
  },
};

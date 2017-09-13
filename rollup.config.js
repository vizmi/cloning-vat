import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  output: {
    file: 'app/index.js',
    format: 'iife'
  },
  sourcemap: 'inline',
  plugins: [
    vue({
      css: false
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      //'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      browser: true,
      extensions: [ '.js', '.json' ]
    })
  ]
};

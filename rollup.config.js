import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'app/index.js',
    format: 'iife'
  },
  sourcemap: 'inline',
  globals: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  plugins: [
    resolve({
      browser: true,
      extensions: [ '.js', '.json' ]
    })
  ]
};

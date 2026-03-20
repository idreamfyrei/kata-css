export default {
  input: 'src/kata.js',
  output: [
    {
      file: 'dist/kata.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/kata.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/kata.umd.js',
      format: 'umd',
      name: 'Kata',
      sourcemap: true
    }
  ],
  external: [],
  plugins: []
};
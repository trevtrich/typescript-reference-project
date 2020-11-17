/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import autoExternal from 'rollup-plugin-auto-external';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'lib',
      entryFileNames: 'index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      autoExternal(),
      typescript({
        declaration: true,
        declarationDir: 'lib/types',
        rootDir: 'src'
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {file: 'lib/index.es.js', format: 'es', sourcemap: true},
    plugins: [
      autoExternal(),
      typescript()
    ]
  }
];

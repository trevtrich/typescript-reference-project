/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import autoExternal from 'rollup-plugin-auto-external';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  plugins: [autoExternal(), babel({babelHelpers: 'bundled', extensions: ['.ts']})],
  output: [
    {file: 'lib/index.cjs.js', format: 'cjs', sourcemap: true},
    {file: 'lib/index.es.js', format: 'es', sourcemap: true}
  ]
};

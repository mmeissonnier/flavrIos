import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...externals,
    'styled-components/native',
    'react-native-vector-icons/Ionicons',
  ],
  plugins: [
    resolve({extensions}),
    babel({extensions, babelrc: false, configFile: './babel.config.build.js'}),
    json(),
    commonjs(),
  ],
};

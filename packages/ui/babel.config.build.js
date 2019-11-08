module.exports = api => {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'babel-plugin-styled-components',
        {ssr: false, transpileTemplateLiterals: true},
      ],
    ],
    include: ['src/index.ts', 'src/components/**', 'node_modules/**'],
  };
};

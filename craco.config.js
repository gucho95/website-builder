// craco.config.js
const path = require(`path`);

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@templates': path.resolve(__dirname, 'src/components/templates'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@icons$': path.resolve(__dirname, 'src/components/atoms/icons/index.js'),
      '@hooks$': path.resolve(__dirname, 'src/hooks/index.js'),
      '@hocs$': path.resolve(__dirname, 'src/hocs/index.js'),
      '@utils$': path.resolve(__dirname, 'src/utils/index.js'),
      '@selectors': path.resolve(__dirname, 'src/store/selectors'),
      '@actions': path.resolve(__dirname, 'src/store/actions'),
      '@sagas': path.resolve(__dirname, 'src/store/sagas'),
      '@services': path.resolve(__dirname, 'src/store/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
    },
  },
};

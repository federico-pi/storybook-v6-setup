const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

if (process.env.STORYBOOK === '1') {
  defaultConfig.resolver.resolverMainFields.unshift('sbmodern');
}

module.exports = defaultConfig;

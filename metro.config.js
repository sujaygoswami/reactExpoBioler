const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("./custom-sass-transformer.js"),
  };

  config.resolver = {
    ...resolver,
    // Ensure scss is NOT in assetExts and IS in sourceExts
    sourceExts: [...resolver.sourceExts, "scss", "sass"],
    assetExts: resolver.assetExts.filter((ext) => ext !== "scss" && ext !== "sass"),
  };

  return config;
})();
const sass = require("sass");
const css2rn = require("css-to-react-native-transform").default;
const path = require("path");
// MUST use Expo's babel transformer for Expo SDK 54+
const upstreamTransformer = require("@expo/metro-config/babel-transformer");

function renderToCSS(filename) {
  const result = sass.compile(filename, {
    loadPaths: [path.dirname(filename)],
  });
  return result.css;
}

function renderCSSToReactNative(css) {
  return css2rn(css, { parseMediaQueries: true });
}

module.exports.transform = function ({ src, filename, options, plugins }) {
  if (filename.endsWith(".scss") || filename.endsWith(".sass")) {
    const css = renderToCSS(filename);
    const cssObject = renderCSSToReactNative(css);
    return upstreamTransformer.transform({
      src: "module.exports = " + JSON.stringify(cssObject),
      filename,
      options,
      plugins,
    });
  }
  return upstreamTransformer.transform({ src, filename, options, plugins });
};

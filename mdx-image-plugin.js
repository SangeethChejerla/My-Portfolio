const remarkMdxImages = require('remark-mdx-images');

module.exports = function mdxImagePlugin(options = {}) {
  return function remarkMdxImagesTransformer(tree) {
    remarkMdxImages.default(tree, options);
  };
};
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItAnchor));
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/images/*.avif");
    return {
      dir: {
        input: "src",
        output: "_site",
      },
    };
  };
  
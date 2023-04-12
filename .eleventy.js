module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/images/*.avif");
    return {
      dir: {
        input: "src",
        output: "_site",
      },
    };
  };
  
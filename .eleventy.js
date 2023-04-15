const markdownItAnchor = require("markdown-it-anchor");
const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItAnchor));
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/images/*.webp");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
    return {
      dir: {
        input: "src",
        output: "_site",
      },
    };
  };
  
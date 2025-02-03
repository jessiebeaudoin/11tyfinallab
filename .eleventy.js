module.exports = function(eleventyConfig) {
  // Shortcode for reusable content
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
      dir: {
          input: "./",
          includes: "_includes",
          output: "_site"
      }
  };
};

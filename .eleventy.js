const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );

  // date filter (localized)
  eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css": "./static/css/prism-tomorrow.css",
    "./src/static/css/app.css": "./static/css/app.css",
    "./src/static/css/hydrogen.css": "./static/css/hydrogen.css",
  });

  eleventyConfig.addCollection("overview_en", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/en/overview/**/*.md");
  });
  
  eleventyConfig.addCollection("overview_fr", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/fr/overview/**/*.md");
  });

  eleventyConfig.addCollection("configuration_en", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/en/configuration/**/*.md");
  });
  
  eleventyConfig.addCollection("configuration_fr", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/fr/configuration/**/*.md");
  });

  eleventyConfig.addCollection("properties_en", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/en/properties/**/*.md");
  });
  
  eleventyConfig.addCollection("properties_fr", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/fr/properties/**/*.md");
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};

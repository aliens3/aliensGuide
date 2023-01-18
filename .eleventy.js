
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }
  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(require('markdown-it-multimd-table')).use(require('markdown-it-anchor'),{ slugify: s => s });

  eleventyConfig.setLibrary('md', markdownLib)


  return {
    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",
    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",
    dir: { input: 'src', output: '_site' }
  };
};

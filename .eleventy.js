
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/lib");
  eleventyConfig.addPassthroughCopy("src/reveal-imgs");

  function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }

  eleventyConfig.addFilter("sortByOrder", sortByOrder);
    

  
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy年LL月dd日 HH:mm');
  });

  /*eleventyConfig.addNunjucksFilter("mysearch",function (collection) {
    // what fields we'd like our index to consist of
    const posts = [];
    // loop through each page and add it to the index
    collection.forEach((page) => {
      const patt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi
      const pattCSS = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style\s*>/gi
      const content = page.templateContent.replace(patt,"").replace(pattCSS,"").replace(/(<([^>]+)>)/gi, "");

      posts.push({
        url: page.url,
        title: page.fileSlug || "",
        body: content,
      });
    });
  
    return JSON.stringify(posts)
  });*/

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }
  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(require('markdown-it-multimd-table')).use(require('markdown-it-anchor'),{ slugify: s => s });

  eleventyConfig.setLibrary('md', markdownLib)
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- excerpt -->"
  });

  return {
    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",
    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",
    dir: { input: 'src', output: '_site' }
  };
};
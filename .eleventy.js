
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addNunjucksFilter("myslug", function(item) { 
    return item.replace(/(\r\n|\n|\r)/g, "").replace(/\\/g, "").replace(/"/g, "").replace(/\//g, "")
  
  });

  eleventyConfig.addNunjucksFilter("mysearch",function (collection) {
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
  });

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

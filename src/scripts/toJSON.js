
module.exports = function (collection) {
  // what fields we'd like our index to consist of
  const posts = []
  // loop through each page and add it to the index
  collection.forEach((page) => {
    posts.push({
      url: page.url,
      title: page.template.frontMatter.data.title,
      body: page.templateContent,
    });
  });

  return posts.toJSON();
};
const dbArticles = require('../../public/db.json').article

exports.articlepage = (req, res) => {
    console.log('je suis la page article')
  res.render("article", {
    dbArticles
  });
};

exports.editArticle = (req, res) => {
  console.log("je suis le controller edit Article", req.params.id, req.body);
  res.render("contact");
};

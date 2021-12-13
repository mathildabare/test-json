// Import de module
const express = require("express");
const router = express.Router();

// Import des controllers
const HomeController = require("./controllers/HomeController");
const ContactController = require("./controllers/ContactController");
const ArticleController = require("./controllers/ArticleController");

// Middleware
const mdl = require("./middleware/coucou");

// Routes
router.route("/")
  .get(mdl.coucou, HomeController.homepage);

router.route("/article")
  .get(ArticleController.articlepage);
router.route("/article/:id")
  .delete(ArticleController.editArticle);

router.route("/contact")
  .get(ContactController.contactpage)
  .post(ContactController.createMessage);

router
  .route("/contact/:id")
  .put(ContactController.editMessage)

module.exports = router;

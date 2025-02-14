const express = require("express");
const router = new express.Router();
const articleService = require("../../services/service");

const articleController = require("../../controllers/article.controller");
const authController = require("../../controllers/auth.controller")
router.get(
  "/articles",
  articleController.getArticlesController
);

router.post(
  "/articles",
  articleController.createArticlesController
);

router.get(
  "/articles",
  articleController.getArticlesController
);

router.put(
  "/articles/:id",

  articleController.update
);

router.delete(
  "/articles/:id",

  articleController.destory
);



router.get(
  "/articles/:id",

  articleController.show
);
module.exports = router;


router.post("/register",authController.register);
router.post("/login",authController.login);
router.get("user/me",authController.showMe);
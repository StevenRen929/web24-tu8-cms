//const{getAllArticles,createArticle} = require("../services/service")
const articleService = require("../services/service");

const getArticlesController = async (req, res) => {
  const articles = await articleService.getAllArticles();
  res.json(articles);
};
const createArticlesController = async (req, res) => {
  const { title, content, author, comments, status, likedBy } = req.body;

  if (!title || !content || !author) {
    return res
      .status(400)
      .json({ error: "Title, content, and author are required." });
  }

  try {
    //
    const newArticle = await articleService.createArticle({
      title,
      content,
      author,
      status,
      likedBy,
      comments,
    });
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await articleService.updateArticle(id, req.body);
    res.send(result);
  } catch (err) {getArticles
    res.status(500).json({ error: err.message });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await articleService.getArticle(id);
    console.log('result',result);
    if (!result) {
      return res.status(404).json({ error: `Article with ID ${id} not found` });
    }
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const destory = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const result = await articleService.deleteArticle(id);
      res.status(200).send({ message: "Article deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
module.exports = {
  createArticlesController,
  getArticlesController,
  update,
  destory,
  show
};

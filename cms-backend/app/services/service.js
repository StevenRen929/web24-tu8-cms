// services/articlesService.js
const Article = require("../model/articleModel");


// Fetch all articles
const getAllArticles = async () => {
  try {
    const articles = await Article.find(); 
    return articles; 
  } catch (error) {
    console.error("Error fetching articles from MongoDB:", error);
    throw error; 
  }
};
const createArticle = async (articleData) => {
  try {
    //result = await Article.create(data)
      const newArticle = new Article(articleData);  // 使用请求数据创建新的 Article 实例
      await newArticle.save();  // 将新文章保存到数据库
      return newArticle;  // 返回保存后的文章
  } catch (err) {
      throw new Error('Error creating article: ' + err.message);
  }
};

const updateArticle = async (id,articleData) => {
  try {
    console.log(id);
      const result = await Article.findByIdAndUpdate(id,articleData,{new:true});
      result.save();
      return result;  // 返回保存后的文章
  } catch (err) {
      throw new Error('Error creating article: ' + err.message);
  }
};

const deleteArticle = async (id) => {
  try {
    console.log(id);
      const result = await Article.findByIdAndDelete(id);
     // result.save();
      return result;  // 返回保存后的文章
  } catch (err) {
      throw new Error('Error creating article: ' + err.message);
  }
};

const getArticle = async (id) => {
  try {
    const result = await Article.findById(id);
    if (!result) {
      throw new Error(`Article with ID ${id} not found.`);
    }
    return result;
  } catch (err) {
    throw new Error('Error finding article: ' + err.message);
  }
};

module.exports = { getAllArticles ,createArticle,updateArticle,deleteArticle,getArticle};
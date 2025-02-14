//ORM

const mongoose = require("mongoose");

//sql- articleTable
const articleSchema = new mongoose.Schema({
  title: { type: String,index:true, required: true },
  content: { type: String, required: true },
  comments:[{type:String}],
  status:{type:String},
  author: { type: String, required: true },
  likedBy:[{type:String}],

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

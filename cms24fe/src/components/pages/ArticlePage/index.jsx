import React, { useEffect, useState } from "react";

import articleApi from "../../../api/article"; // Assuming './api/article' is the correct path
import Article from "../../Article";
import { useParams } from "react-router";
//import '../ArticlesPage/index.css'

// Access the fetchArticles and deleteArticles from the imported object
const { getArticleDetail } = articleApi;
export default function ArticlePage() {
  const [articleData, setArticleData] = useState([]);
  const { id } = useParams();
  const getArticle = async (id) => {
    try {
      const result = await getArticleDetail(id);
      console.log(result.data);
      // return result.data;
      setArticleData(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    //setArticlesData(getArticles());
    getArticle(id);
  }, []);

  //   useEffect(() => {
  //     console.log("article data changed");
  //   }, [articleData]);
  const { title, content } = articleData;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
   
    </div>
  );
}

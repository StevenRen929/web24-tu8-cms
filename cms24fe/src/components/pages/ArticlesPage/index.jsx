import React, { useEffect, useState } from "react";

import articleApi from "../../../api/article"; // Assuming './api/article' is the correct path
import Article from "../../Article";
import { useNavigate } from "react-router-dom";
//import '../ArticlesPage/index.css'

// Access the fetchArticles and deleteArticles from the imported object
const { fetchArticles, deleteArticle } = articleApi;
export default function ArticlesPage() {
  const [articlesData, setArticlesData] = useState([]);
  let navigate = useNavigate();

  const getArticles = async () => {
    const result = await fetchArticles();
    console.log(result.data);
    // return result.data;
    setArticlesData(result.data);
  };

  useEffect(() => {
    //setArticlesData(getArticles());
    getArticles();
  }, []);

  useEffect(() => {
    console.log("article data changed");
  }, [articlesData]);

  // Handle deleting an article
  const onDeleteArticle = async (id) => {
    try {
      await deleteArticle(id);

      // setArticlesData(articlesData.filter((article) => article._id !== id));
      getArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <>
      <div>
        {
          <button
            onClick={() => {
              navigate("/creatArticle");
            }}
          >
            creatArticle
          </button>
        }
      </div>
      <div className=" max-w-96">
        {articlesData.length > 0 ? (
          articlesData.map((item) => {
            return (
              <div className="bg-blue-100 p-10 w-80 min-w-80" key={item._id}>
                {" "}
                {/* Assuming each article has a unique id */}
                <Article data={item} />
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/articles/${item._id} `);
                  }}
                >
                  detail
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onDeleteArticle(item._id);
                  }}
                >
                  Delete Article
                </button>
              </div>
            );
          })
        ) : (
          <p>No articles found</p> // Handle the case when articlesData is not an array or is empty
        )}
      </div>
    </>
  );
}

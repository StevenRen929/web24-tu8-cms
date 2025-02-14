import axios from 'axios';

const fetchArticles = () => {
  return axios
    .get('http://localhost:8000/api/v1/articles')
    .catch((error) => {
      console.error('Error fetching articles:', error);
      throw error;
    });
};

const deleteArticle = (id) => {
  return axios
    .delete(`http://localhost:8000/api/v1/articles/${id}`)
    .catch((error) => {
      console.error('Error deleting article:', error);
      throw error;
    });
};


const getArticleDetail = (id) => {
    return axios
      .get(`http://localhost:8000/api/v1/articles/${id}`)
      .catch((error) => {
        console.error('Error fetching article detail:', error);
        throw error;
      });
  };
export default { fetchArticles, deleteArticle,getArticleDetail };
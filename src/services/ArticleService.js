import axios from "axios";

const ARTICLE_API_BASE_URL = 'http://localhost:8080/article'

class ArticleService{
    saveArticle(article){
        return axios.post(ARTICLE_API_BASE_URL,article);
    }
    getArticle(){
      return  axios.get('http://localhost:8080/article');
    }
    deleteArticle(id)
    {
        return axios.delete(ARTICLE_API_BASE_URL+"/"+id);
    }
    getArticleById(id){
        return axios.get(ARTICLE_API_BASE_URL+"/"+id);
    }
    updateArticle(article,id){
        return axios.put(ARTICLE_API_BASE_URL+"/"+id ,article);
    }

}


export default new ArticleService();

import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../../services/ArticleService';
import ArticleItems from './ArticleItems';

const ArticleList = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
    
          try {
            const response = await ArticleService.getArticle();
            setArticles(response.data)
            console.log(response)
    
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
        
      }, []);
      const deleteArticle = (e,id) =>{
           e.preventDefault();
           ArticleService.deleteArticle(id).then((res) =>{
            if (articles) {
              setArticles((prevElement)=>{
                return prevElement.filter((article)=>article.idArticle !== id);
              })
              
            }
           });
      }
    
  return (
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button
             className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'
             onClick={()=>navigate('/addarticle')}
             >Ajouter Article</button>
        </div>
        <div className="flex shadow border-b">
            <table className='min-w-full'>
                <thead>
                    <tr>
                        <th className='text-left uppercase font-medium text-gray-500'>Description</th>
                        <th className='text-left uppercase font-medium text-gray-500'>Quantite</th>
                        <th className='text-left uppercase font-medium text-gray-500'>Prix</th>
                        <th className='text-left uppercase font-medium text-gray-500'>Categorie</th>
                        <th className='text-left uppercase font-medium text-gray-500'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                   {articles.map((article)=>(
                     <ArticleItems article={article} key={article.idArticle}  deleteArticle={deleteArticle} />
                   ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}
   
export default ArticleList
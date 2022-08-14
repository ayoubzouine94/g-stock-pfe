import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArticleItems = ({article,deleteArticle}) => {
   const navigate = useNavigate();
   const editArticle = (e, id) => {
    e.preventDefault();
    navigate(`/editarticle/${id}`);
  };
  return (
    <tr>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {article.descArticle}
         </div> 
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {article.qteArticle}
         </div> 
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {article.prixArticle}
         </div> 
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {article.idCategorie}
         </div> 
    </td>
    <td className='text-right px-6 whitespace-nowrap font-medium text-sm'>
        <a
        onClick={(e , id)=>editArticle(e, article.idArticle)}
         href="!#"
         className='text-indigo-600 hover:text-indigo-800 px-4'
         >Modifier
         </a>
        <a 
        href="!#" 
        onClick={(e,id)=>deleteArticle(e,article.idArticle)}
        className='text-indigo-600 hover:text-indigo-800'
        >Suprimmer
        </a>
    </td>
</tr>
  )
}

export default ArticleItems
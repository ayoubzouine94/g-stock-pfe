import React,{useState} from 'react';
import ArticleService from '../../services/ArticleService'
import { useNavigate } from 'react-router-dom'

const AddArticle = () => {
  const navigaye = useNavigate();
    const [article, setArticle] = useState({
        idArticle:"",
        descArticle:"",
        qteArticle:"",
        prixArticle : "",
        idCategorie:""
    })

    const handleChange = (e) =>{
        const value = e.target.value;
        setArticle({...article, [e.target.name]: value})
        

    }
    const reset = (e) =>{
      e.preventDefault();
      setArticle({
        
        descArticle:"",
        qteArticle:"",
        prixArticle : "",
        idCategorie:""
      })
    }
    const saveArticle = (e) => {
        e.preventDefault();
        ArticleService.saveArticle(article).then((responce)=>{
          console.log(responce);
          navigaye('/articlelist')

        }).catch((error)=>{
            console.log(error);
        })
       
    }
      return (
    <div className='flex max-w-2xl pt-10 rounded-xl mx-auto shadow-2xl border-4'>
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Ajouter Nouveau Article</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="description">Description :</label>
                <input name='descArticle'
                 value={article.descArticle} 
                 placeholder="Tapez Description" 
                 type="text" 
                 className='h-10 w-96 border mt-2 px-2 py-2' 
                 onChange={(e) => handleChange(e)}
                 />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="unite">Unite :</label>
                <input
                    name='qteArticle'
                    value={article.qteArticle}
                    placeholder="Tapez L'unite"
                    type="text" 
                    className='h-10 w-96 border mt-2 px-2 py-2'
                    onChange={(e) => handleChange(e)}
                 />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="prix">Prix :</label>
                <input
                 name='prixArticle'
                 type="text"
                 className='h-10 w-96 border mt-2 px-2 py-2'
                 value={article.prixArticle}
                 placeholder="Tapez le prix"
                 onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="prix">Numero Categorie:</label>
                <input
                 name='idCategorie'
                 type="text"
                 className='h-10 w-96 border mt-2 px-2 py-2'
                 value={article.idCategorie}
                 placeholder="Categorie"
                 onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 mt-5">
              <button 
               className='rounded
             text-white font-semibold
              bg-green-400
               hover:bg-green-700
                py-2 px-6'
                onClick={saveArticle}>Ajouter</button>
              <button
               className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'
               onClick={reset}
               >Vider</button>
            </div>
          
        </div>
    </div>
  )
}

export default AddArticle
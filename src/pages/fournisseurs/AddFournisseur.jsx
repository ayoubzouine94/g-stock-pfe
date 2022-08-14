import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import FournisseurService from '../../services/FournisseurService';

const AddFournisseur = () => {
 /** nomFournisseur;
	private String adrFournisseur;
	private String telFournisseur; */
    const navigaye = useNavigate();
    const [fournisseur, setFournisseur] = useState({
        idFournisseur:"",
        nomFournisseur:"",
        adrFournisseur:"",
        telFournisseur:"",
        
    })
    
  
    const handleChange = (e) =>{
        const value = e.target.value;
        setFournisseur({...fournisseur, [e.target.name]: value})  
    }
    const reset = (e) =>{
      e.preventDefault();
      setFournisseur({
        
        idFournisseur:"",
        nomFournisseur:"",
        adrFournisseur:"",
        telFournisseur:"",
      })
    }
  
    
  
    const saveFournisseur = (e) => {
        e.preventDefault();
     
        FournisseurService.saveFournisseur(fournisseur).then((responce)=>{
          console.log(responce);
          navigaye('/fournisseurList')
  
        }).catch((error)=>{
            console.log(error);
        })
       
    }
  return (
   
    <div className='flex max-w-2xl pt-10 rounded-xl mx-auto shadow-2xl border-4'>
    <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1>Ajouter Nouveau Fournisseur</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className='block text-gray-600 text-sm font-normal' htmlFor="description">Nom :</label>
            <input name='nomFournisseur'
             value={fournisseur.nomFournisseur} 
    
             placeholder="Nom Fournisseur" 
             type="text" 
             className='h-10 w-96 border mt-2 px-2 py-2' 
             onChange={(e) => handleChange(e)}
             />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className='block text-gray-600 text-sm font-normal' htmlFor="unite">Adresse :</label>
            <input
                name='adrFournisseur'
                value={fournisseur.adrFournisseur}
                placeholder="Email Fournisseur"
                type="text" 
                className='h-10 w-96 border mt-2 px-2 py-2'
                onChange={(e) => handleChange(e)}
             />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className='block text-gray-600 text-sm font-normal' htmlFor="prix">Telephone :</label>
            <input
             name='telFournisseur'
             type="text"
             className='h-10 w-96 border mt-2 px-2 py-2'
             value={fournisseur.telFournisseur}
             placeholder="Telephone Fournisseur"
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
            onClick={saveFournisseur}>Ajouter</button>
          <button
           className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'
           onClick={reset}
           >Vider</button>
        </div>
      
    </div>
</div>
  )
}

export default AddFournisseur
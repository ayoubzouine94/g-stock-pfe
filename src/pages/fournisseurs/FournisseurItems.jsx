import React from 'react';
import {useNavigate} from 'react-router-dom';

const FournisseurItems = ({fournisseur,deleteFournisseur}) => {
     const navigate = useNavigate();
     const editFournisseur = (e, id) => {
          e.preventDefault();
          navigate(`/editfournisseur/${id}`);
        };
  return (
    <tr>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {fournisseur.nomFournisseur}
         </div> 
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {fournisseur.adrFournisseur}
         </div> 
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {fournisseur.telFournisseur}
         </div> 
    </td>
    <td className='text-right px-6 whitespace-nowrap font-medium text-sm'>
        <a
        
         href="!#"
         className='text-indigo-600 hover:text-indigo-800 px-4'
         onClick={(e , id)=>editFournisseur(e, fournisseur.idFournisseur)}
         >Modifier
         </a>
        <a 
        href="!#" 
        onClick={(e,id)=>deleteFournisseur(e,fournisseur.idFournisseur)}
        className='text-indigo-600 hover:text-indigo-800'
        >Suprimmer
        </a>
    </td>
</tr>
  )
}

export default FournisseurItems
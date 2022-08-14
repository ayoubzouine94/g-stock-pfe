import React,{useState,useEffect} from 'react';
import FournisseurService from '../../services/FournisseurService';
import {useNavigate} from 'react-router-dom';
import FournisseurItems from './FournisseurItems';

const FournisseurList = () => {
  
  const navigate = useNavigate();
  const [fournisseur, setFournisseur] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
  
        try {
          const response = await FournisseurService.getFournisseur();
          setFournisseur(response.data)
          console.log(response)
  
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
      
    }, []);
    const deleteFournisseur = (e,id) =>{
         e.preventDefault();
        FournisseurService.deleteFournisseur(id).then((res) =>{
          if (fournisseur) {
            setFournisseur((prevElement)=>{
              return prevElement.filter((fournisseur)=>fournisseur.idFournisseur !== id);
            })
            
          }
         });
    }
  return (
    <div className='container mx-auto my-8'>
    <div className='h-12'>
        <button
         className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'
         onClick={()=>navigate('/addfournisseur')}
         >Ajouter Fournisseur</button>
    </div>
    <div className="flex shadow border-b">

        <table className='min-w-full'>
            <thead>
                <tr>
                    
                    <th className='text-left uppercase font-medium text-gray-500'>Nom Fournisseur </th>
                    <th className='text-left uppercase font-medium text-gray-500'>Adresse Fournisseur</th>
                    <th className='text-left uppercase font-medium text-gray-500'>Telephone Fournisseur</th>
                    <th className='text-left uppercase font-medium text-gray-500'>Adresse</th>
                </tr>
            </thead>
            {!loading && (
            <tbody className='bg-white'>
               {fournisseur.map((fournisseur)=>(
                 <FournisseurItems fournisseur={fournisseur} key={fournisseur.idFournisseur}  deleteFournisseur={deleteFournisseur} />
               ))}
            </tbody>
            )}
        </table>
    </div>
</div>
  )
}

export default FournisseurList
import React,{useState,useEffect} from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
import FournisseurService from '../../services/FournisseurService';


const UpdateFournisseur = () => {
 const { id } =   useParams();
 const navigate = useNavigate();
 const [fournisseur, setFournisseur] = useState(
    //[{"idFournisseur":1,"nomFournisseur":"alami","nomFournisseur":"casa","telFournisseur":"345678"
    {
        id:id,
        nomFournisseur:"",
        adrFournisseur:"",
        telFournisseur :"",
       
    });
    useEffect(() => {
      const fetchData = async () =>{
        try {
            const responce  = await FournisseurService.getFournisseurById(fournisseur.id);
            setFournisseur(responce.data);

            
        } catch (error) {
            console.log(error)
        }
      }
      fetchData();
    }, [])


    const  updateFournisseur = (e ,id) =>{
        e.preventDefault();
        console.log(fournisseur);
        FournisseurService.updateFournisseur(fournisseur, id)
          .then((response) => {
            navigate("/fournisseurlist");
          })
          .catch((error) => {
            console.log(error);
          });

        

    }

 const handleChange = (e) =>{
    const value = e.target.value;
    setFournisseur({...fournisseur, [e.target.name]: value})
}
  return (
    <div className='flex max-w-2xl pt-10 rounded-xl mx-auto shadow-2xl border-4'>
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Modifier Fournisseur</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="description">Nom Fournisseur :</label>
                <input name='nomFournisseur'
                 value={fournisseur.nomFournisseur} 
                 placeholder="Tapez Description" 
                 type="text" 
                 className='h-10 w-96 border mt-2 px-2 py-2' 
                 onChange={(e) => handleChange(e)}
                 />
                 {
                    //[{"idFournisseur":1,"nomFournisseur":"alami","adrFournisseur":"casa","telFournisseur":"345678"
                 }
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="unite">Adresse :</label>
                <input
                    name='adrFournisseur'
                    value={fournisseur.adrFournisseur}
                    placeholder="Tapez L'adresse"
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
                 placeholder="Tapez le prix"
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
                onClick={updateFournisseur}>Modifier</button>
              <button
               className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'
               onClick={()=>navigate('/articlelist')}
               >Annuler</button>
            </div>
          
        </div>
    </div>
  )
}

export default UpdateFournisseur
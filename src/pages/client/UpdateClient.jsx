import React,{useState,useEffect} from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
import ClientService from '../../services/ClientService';

const UpdateClient = () => {
 const { id } =   useParams();
 const navigate = useNavigate();
 const [client, setClient] = useState(
    {
        id:id,
        nomClient:"",
        telClient:"",
        emailClient :"",
        adrClient:""
        //[{"idClient":40,"nomClient":"ayou","telClient":"123","emailClient":"ayoub@gmail.com","adrClient":"casa"},
    });
    useEffect(() => {
      const fetchData = async () =>{
        try {
            const responce  = await ClientService.getClientById(client.id);
            setClient(responce.data);

            
        } catch (error) {
            console.log(error)
        }
      }
      fetchData();
    }, [])
    const  updateClient = (e ,id) =>{
        e.preventDefault();
        console.log(client);
        ClientService.updateClient(client, id)
          .then((response) => {
            navigate("/clientlist");
          })
          .catch((error) => {
            console.log(error);
          });

        

    }

 const handleChange = (e) =>{
    const value = e.target.value;
    setClient({...client, [e.target.name]: value})
}
  return (
    <div className='flex max-w-2xl pt-10 rounded-xl mx-auto shadow-2xl border-4'>
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Modifier Client</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="description">Nom :</label>
                <input name='nomClient'
                 value={client.nomClient} 
                 placeholder="Tapez Description" 
                 type="text" 
                 className='h-10 w-96 border mt-2 px-2 py-2' 
                 onChange={(e) => handleChange(e)}
                 />
                 {
                    //[{"idClient":40,"nomClient":"ayou","telClient":"123","emailClient":"ayoub@gmail.com","adrClient":"casa"},
                 }
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="unite">Telephone :</label>
                <input
                    name='telClient'
                    value={client.telClient}
                    placeholder="Tapez L'unite"
                    type="text" 
                    className='h-10 w-96 border mt-2 px-2 py-2'
                    onChange={(e) => handleChange(e)}
                 />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="prix">Email :</label>
                <input
                 name='emailClient'
                 type="text"
                 className='h-10 w-96 border mt-2 px-2 py-2'
                 value={client.emailClient}
                 placeholder="Tapez le prix"
                 onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal' htmlFor="prix">Adresse :</label>
                <input
                 name='adrClient'
                 type="text"
                 className='h-10 w-96 border mt-2 px-2 py-2'
                 value={client.adrClient}
                 placeholder="Adresse "
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
                onClick={updateClient}>Modifier</button>
              <button
               className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'
               onClick={()=>navigate('/clientlist')}
               >Annuler</button>
            </div>
          
        </div>
    </div>
  )
}

export default UpdateClient
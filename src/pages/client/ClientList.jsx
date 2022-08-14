import React,{useState,useEffect} from 'react';
import ClientService from '../../services/ClientService';
import { useNavigate } from 'react-router-dom';
import ClientItems from './ClientItems'

const ClientList = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
  
        try {
          const response = await ClientService.getClient();
          setClient(response.data)
          console.log(response)
  
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
      
    }, []);
    const deleteClient = (e,id) =>{
         e.preventDefault();
         ClientService.deleteClient(id).then((res) =>{
          if (client) {
            setClient((prevElement)=>{
              return prevElement.filter((client)=>client.idClient !== id);
            })
            
          }
         });
    }
  return (
    
    
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button
             className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'
             onClick={()=>navigate('/addclient')}
             >Ajouter Client</button>
        </div>
        <div className="flex shadow border-b">
  
            <table className='min-w-full'>
                <thead>
                    <tr>
                        
                        <th className='text-left uppercase font-medium text-gray-500'>Nom Client </th>
                        <th className='text-left uppercase font-medium text-gray-500'>Telephone</th>
                        <th className='text-left uppercase font-medium text-gray-500'>Email</th>
                        <th className='text-left uppercase font-medium text-gray-500'>Adresse</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                   {client.map((client)=>(
                     <ClientItems client={client} key={client.idClient}  deleteClient={deleteClient} />
                   ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default ClientList
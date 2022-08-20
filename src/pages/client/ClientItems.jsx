import React from 'react';
import {useNavigate} from 'react-router-dom'

const ClientItems = ({client , deleteClient}) => {
     const navigate = useNavigate();
     const editClient = (e, id) => {
          e.preventDefault();
          navigate(`/editclient/${id}`);
        };
  return (
    <tr>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {client.nomClient}
         </div> 
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {client.telClient}
         </div> 
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {client.emailclient}
         </div> 
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
         <div className='text-sm text-gray-600'>
            {client.adrClient}
         </div> 
    </td>
    <td className='text-right px-6 whitespace-nowrap font-medium text-sm'>
        <a
        
         href="!#"
         className='text-indigo-600 hover:text-indigo-800 px-4'
         onClick={(e , id)=>editClient(e, client.idClient)}
         >Modifier
         </a>
        <a 
        href="!#" 
        onClick={(e,id)=>deleteClient(e,client.idClient)}
        className='text-indigo-600 hover:text-indigo-800'
        >Suprimmer
        </a>
    </td>
</tr>
  )
}

export default ClientItems
import React,{useState,Fragment,useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";
import {AiFillDelete ,AiFillEdit} from 'react-icons/ai';

const TableForm = ({list,setList,totalSome,setTotalSome, description,quantitie,setQuantitie,setDescription,prix,setPrix,setTotal ,total}) => {
    
const [isEditing, setIsEditing] = useState(false);


const handleSubmit = (e) =>{
    e.preventDefault();
   

    if (!description || !quantitie || !prix) {
        alert('Merci de Remplir tout les champ')
        
    } else {
        const newItems = {
            id: uuidv4() ,
            description,
            quantitie,
            prix ,
            total
         
        
    }
    setDescription("");
    setQuantitie("");
    setPrix("");
    setTotal("");
    setIsEditing(false)
    setList([...list,newItems]);
    console.log(list); 
} 
}

    useEffect(() => {
        const  calculerTotal = (total)=> {
            setTotal(quantitie*prix);
    
        }
        calculerTotal(total)
    }, [total,setTotal,quantitie,prix])
    useEffect(() => {
        let rows = document.querySelectorAll(".amount")
        let sum = 0;
        for (let i = 0; i < rows.length ; i++) {
        if(rows[i].id === 'amount'){
            sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
            setTotalSome(sum);
        }
    }
    })
    
    // Calculer le Total Somme
  

     //Fonction Edit
     const editRow = (id) =>{
        const editingRow = list.find((row) => row.id !== id);
        setList(list.filter((row)=> row.id !== id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantitie(editingRow.quantitie)
        setPrix(editingRow.prix)

     }
    //Function DELETE
    const deleteRow = (id) =>setList(list.filter((row) => row.id !==id))
  return (
    <>
    <div>

        <form onSubmit={handleSubmit}>
        <div className=''>
            <div className='flex flex-column'>
            <label htmlFor="description">Desc</label>
            <input type="text" name='description' id='description'
            placeholder='Item Description'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
        </div>
        <div className='flex flex-column'>
        <label htmlFor="quantitie">Unite</label>
        <input type="text" name='quantitie' id='quantitie'
        placeholder='Item Description'
        value={quantitie}
        onChange={(e)=>setQuantitie(e.target.value)}
        />
        </div>

        <div className='flex flex-column'>
        <label htmlFor="prix">Prix</label>
        <input type="text"  name='prix' id='prix'
        placeholder='Prix'
        value={prix}
        onChange={(e)=>setPrix(e.target.value)}
        />
       </div>
        <div className='flex flex-column'>
        <label htmlFor="prix">Total:</label>
        <p className='font-bold'>{total} <span>DH TTC</span></p>
        </div>
    </div>
    <button type='submit'
      className="mb-5 bg-blue-500 text-white 
      font-bold mpy-2 px-8 rounded shadow border-2 
      border-blue-500 transition-all
      duration-300 hover:text-blue-500
      hover:bg-transparent 
      "
    >{isEditing ? 'modifier' : 'Ajouter' }</button>
        </form>
        <table width="100%" className='mb-10'>
            <thead>
                <tr className='bg-gray-200 p-1'>
                <td>Description</td>
                <td>Quantitie</td>
                <td>Prix</td>
                <td>Total</td>
                
                </tr>
            </thead>
        {list.map(({id ,description ,quantitie ,prix ,total})=>(
            <Fragment key={id}>
                <tbody>
                    <tr className=''>
                        <td  className='font-bold border-2'>{description}</td>
                        <td  className='font-bold border-2'>{quantitie}</td>
                        <td  className='font-bold border-2'>{prix}</td>
                        <td  className='font-bold amount border-2'>{total}</td>
                        <td  className='font-bold'>
                            <button className='text-center' onClick={() => deleteRow(id)}>
                                {<AiFillDelete className='text-center text-red-500' />}
                            </button>
                           
                        </td>
                        <td  className='font-bold'>
                            <button className='text-center' onClick={() => editRow(id)}>
                                {<AiFillEdit className='text-center text-green-500' />}
                            </button>
                           
                        </td>
                        
                       
                           
                        

                    </tr>
                </tbody>
            </Fragment>
            ))}
            </table>
            <div>
                <h2>
                    DHTTC :{totalSome}
                </h2>
            </div>
     </div>   
    </>
  )
}
export default TableForm
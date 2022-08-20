import React,{Fragment} from 'react'

const Table = ({list}) => {
  return (
    <>
   
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
            <tr>
                <td  className='font-bold'>{description}</td>
                <td  className='font-bold'>{quantitie}</td>
                <td  className='font-bold'>{prix}</td>
                <td  className='font-bold'>{total}</td>
            </tr>
            </tbody>
            </Fragment>
            ))}

            </table>
        
    </>
  )
}

export default Table
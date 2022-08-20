import React from 'react'

const Dates = ({numFacture, dateFacture, dateEcheance}) => {
  return (
    <div>  
    {/** Date*/}
<article className="mt-5 flex  items-end justify-end">
  <ul>
      <li className='py-1'><span className="font-bold">Numero de Facture:</span>{numFacture} </li>
      <li className='py-1'><span className="font-bold">Date de Facture:</span>{dateFacture} </li>
      <li className='py-1'><span className="font-bold">date d'échéance:</span>{dateEcheance}</li>
  </ul>
  </article>
{/**fin Date */}
</div>
  )
}

export default Dates
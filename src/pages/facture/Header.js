import React from 'react'

const Header = ({handlePrint}) => {
  return (
    <>
    {/** Header */}
    <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
    <div>
     <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Facture</h1>
    </div>

    <div className='inline-flex '>
     <ul className="flex items-center justify-between flex-wrap">
       <li> 
         <button    className="bg-gray-500 text-white 
              font-bold py-2 px-4 rounded shadow border-2 
              border-gray-500 transition-all
              duration-300 hover:text-gray-500
              hover:bg-transparent 
              " 
              onClick={handlePrint}>
              Imprimer</button>
       </li>
       <li><button className="bg-blue-500 text-white 
              font-bold py-2 px-4 rounded shadow border-2 
              border-blue-500 transition-all
              duration-300 hover:text-blue-500
              hover:bg-transparent 
              ">Telecharger</button></li>
       <li><button className="bg-green-500 text-white 
              font-bold py-2 px-4 rounded shadow border-2 
              border-green-500 transition-all
              duration-300 hover:text-green-500
              hover:bg-transparent 
              ">Envoyer</button></li>
     </ul>
    </div>
    
 </header>
   {/** fin Header*/}
</>
  )
}

export default Header
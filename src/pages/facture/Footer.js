import React from 'react'

const Footer = ({email,tele,bankName,numCompte,webSite}) => {
  return (
<div>
    {/**Footer*/}
    <footer className='footer border-t-2 border-gray-300 pt-5'>
        <ul className="flex flex-wrap items-center justify-center ">
            <li> <span className="font-bold ml-1">Nom : </span> G-STOCK</li>
            <li><span className="font-bold ml-1">Email: </span>{email}</li>
            <li><span className="font-bold ml-1">Telephone: </span> {tele}</li>
            <li><span className="font-bold ml-1">Bank: </span>{bankName}</li>
            <li> <span className="font-bold ml-1">Numero de Compte: </span> {numCompte}</li>
            <li><span className="font-bold ml-1">Site Web: </span>
            <a href={webSite} target="_blank" rel = "noopenner noreferrer">{webSite}</a> </li>
        </ul>
    </footer>
    {/**Fin Footer*/}
</div>
  )
}

export default Footer
import React from 'react'

const MainDetails = ({name,adresse}) => {
  return (
    <div>        {/** Details societe */}
    <section className="flex flex-col items-end justify-end ">
      <h2 className="font-bold md:text-4xl text-xl uppercase">{name}</h2>
      <p>{adresse}</p>
    </section>
    {/** final Details Societe */}
    
    </div>
  )
}

export default MainDetails
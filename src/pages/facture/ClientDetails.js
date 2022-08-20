import React from 'react'

const ClientDetails = ({clientAdresse,nomClient}) => {
  return (
    <div>        {/** Details Clients */}
    <section className="mt-5">
      <h2 className="text-xl uppercase">{nomClient}</h2>
      <p>{clientAdresse} </p>
    </section>
    {/** final Details Clients */}
    </div>
  )
}

export default ClientDetails
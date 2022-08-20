import React from 'react'

const Notes = ({note}) => {
  return (
    <div>  {/** Notes*/}
    <section className="mb-5 mt-10">
    {/** Textarea*/}
    <p className='lg:w-1/2 text-justify'>{note}</p>
    </section>
    
    {/**Fin Notes*/}</div>
  )
}

export default Notes
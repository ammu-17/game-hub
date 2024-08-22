import React from 'react'
import useGeneres from '../hooks/useGeneres'

const GeneralList = () => {
   const {generes} =  useGeneres()
  return (
    <div>
      <ul>
        {generes.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </div>
  )
}

export default GeneralList

import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery} :  Props) => {

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (
    <Heading as='h1' marginY={8} marginX={9}>
        {heading}
    </Heading>
  )
}

export default GameHeading 
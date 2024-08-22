import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props{
    score : number;
}

const CriticScore = ({score} : Props) => {

    let color = score > 75 ? 'green' : score >60 ? 'yellow' : ' '
  return (
    <div>
      <Badge colorScheme={color} fontSize='14px' padding='4px 8px' borderRadius='4px'>{score}</Badge>
    </div>
  )
}

export default CriticScore

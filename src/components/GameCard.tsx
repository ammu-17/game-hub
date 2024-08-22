import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformListIcon from './PlatformListIcon'

interface Props{
    game: Game
}

const GameCard = ({game} : Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='x-large'>{game.name}</Heading>
            <PlatformListIcon platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>
      </Card>
    </div>
  )
}

export default GameCard

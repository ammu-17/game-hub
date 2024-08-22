import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformListIcon from './PlatformListIcon'
import CriticScore from './CriticScore'
import getCroppeDImage from '../services/image-url'

interface Props{
    game: Game
}

const GameCard = ({game} : Props) => {
  return (
    <div>
      <Card width='300px' borderRadius={10} overflow='hidden'>
        <Image src= {getCroppeDImage(game.background_image)}/>
        <CardBody>
            <Heading fontSize='x-large'>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
                <PlatformListIcon platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
      </Card>
    </div>
  )
}

export default GameCard

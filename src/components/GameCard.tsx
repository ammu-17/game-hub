import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformListIcon from './PlatformListIcon'
import CriticScore from './CriticScore'
import getCroppeDImage from '../services/image-url'
import Emojis from './Emojis'

interface Props{
    game: Game
}

const GameCard = ({game} : Props) => {
  return (
    <div>
      <Card>
        <Image src= {getCroppeDImage(game.background_image)}/>
        <CardBody>
            
            <HStack justifyContent={'space-between'} marginBottom={2}>
                <PlatformListIcon platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='x-large'>{game.name} <Emojis rating={game.rating_top}/></Heading>

        </CardBody>
      </Card>
    </div>
  )
}

export default GameCard


import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Gener } from '../hooks/useGeneres';
import { GameQuery } from '../App';

interface Props{
    gameQuery : GameQuery  
}

const GameGrid = ({gameQuery} : Props) => {
    const{data,error,isLoading} = useGames(gameQuery)
    const skeletons = [1,2,3,4,5,6]

    if (error) return <Text>{error}</Text>


  return (
    <div> 
      <SimpleGrid columns={{sm:1, md:2,lg:3,xl:3}} padding={10} spacing={6}>

        {isLoading && skeletons.map((Skeleton) => 
        <GameCardContainer key={Skeleton}>
            <GameCardSkeleton/>
        </GameCardContainer>)}
        {data.map(game => 
        <GameCardContainer key={game.id}>
            <GameCard game={game}/>
        </GameCardContainer>
        )}
      </SimpleGrid>
    </div>
  )
}

export default GameGrid

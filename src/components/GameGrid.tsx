
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Gener } from '../hooks/useGeneres';

interface Props{
    selectedGenre : Gener | null;
    selectedPlatform: Platform | null
}

const GameGrid = ({selectedGenre, selectedPlatform} : Props) => {
    const{data,error,isLoading} = useGames(selectedGenre,selectedPlatform)
    const skeletons = [1,2,3,4,5,6]

  return (
    <div>
       {error &&  <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2,lg:3,xl:3}} padding={10} spacing={5}>

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

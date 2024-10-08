import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GeneralList from "./components/GeneralList";
import { useState } from "react";
import { Gener } from "./hooks/useGeneres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
  genre: Gener | null;
  platform: Platform | null ;
  sortOrder : string;
  searchText: string
}

function App(){

  const[gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)

  return(
    <Grid templateAreas={{
      base: `"nav " "main"`,
      lg: `"nav nav" "aside main"`
    }}

      templateColumns = {{
        base : '1fr',
        lg: '200px 1fr'
      }}
      >
      <GridItem area='nav' > 
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}/>
      </GridItem>

      <Show above="lg">
        <GridItem area='aside' padding={5}>
          <GeneralList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameHeading gameQuery={gameQuery}/>
        <Flex paddingLeft={10}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
          </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectorSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App;
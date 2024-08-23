import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GeneralList from "./components/GeneralList";
import { useState } from "react";
import { Gener } from "./hooks/useGeneres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App(){

 const [selectedGenre, setSelectedGenre] = useState<Gener | null>(null)
 const[selectedPlatform, setSelectedPlatform] = useState<Platform | null >(null)

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
        <Navbar/>
      </GridItem>

      <Show above="lg">
        <GridItem area='aside' padding={5}>
          <GeneralList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App;
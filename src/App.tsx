import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GeneralList from "./components/GeneralList";



function App(){
  return(
    <Grid templateAreas={{
      base: `"nav " "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav' > 
        <Navbar/>
      </GridItem>

      <Show above="lg">
        <GridItem area='aside'>
          <GeneralList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid/>
      </GridItem>
    </Grid>
  )
}

export default App;
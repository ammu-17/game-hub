import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GeneralList from "./components/GeneralList";



function App(){
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
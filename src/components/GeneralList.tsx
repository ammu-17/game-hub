 
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGeneres, { Gener } from '../hooks/useGeneres' 
import getCroppedImageUrl from '../services/image-url'

interface Props {
    onSelectGenre: (genre: Gener) => void
    selectedGenre : Gener | null
}

const GeneralList = ({selectedGenre, onSelectGenre} : Props) => {
   const {data , isLoading , error } =  useGeneres();
   
   if(error) return null;
   if(isLoading) return <Spinner />

  return (
    <div>
      <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='8px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button onClick={()=> onSelectGenre(genre)} fontSize='lg' variant='link' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}>
            {genre.name}
            </Button>
            </HStack>
        </ListItem>)}
      </List>
    </div>
  )
}

export default GeneralList
  
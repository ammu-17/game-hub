 
import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
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
      <Heading fontSize='2xl' marginBottom={4}>Genres</Heading>
      <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='8px'>
            <HStack>
                <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button whiteSpace='normal' textAlign='left' onClick={()=> onSelectGenre(genre)} fontSize='lg' variant='link' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}>
            {genre.name}
            </Button>
            </HStack>
        </ListItem>)}
      </List>
    </div>
  )
}

export default GeneralList
  
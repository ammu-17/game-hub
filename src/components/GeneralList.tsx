 
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGeneres from '../hooks/useGeneres' 
import getCroppedImageUrl from '../services/image-url'

const GeneralList = () => {
   const {data} =  useGeneres()
  return (
    <div>
      <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='8px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize='lg'>
            {genre.name}
            </Text>
            </HStack>
        </ListItem>)}
      </List>
    </div>
  )
}

export default GeneralList
  
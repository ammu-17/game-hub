import React from 'react'
import bullseye from '../assets/bullseye.png';
import thumbsup from '../assets/thumbsup.png';
import meh from '../assets/meh.png'
import { ImageProps } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

interface Props{
    rating: number
}

const Emojis = ({rating}: Props) => {

    if(rating < 3) return null;

    const emojiMap: { [key: number] : ImageProps } = {
        3:{src: meh, alt: 'meh', boxSize : '25px'},
        4:{src: thumbsup, alt: 'recommended',boxSize : '25px'},
        5:{src: bullseye, alt: 'exceptional',boxSize : '35px'}
    }
  return (
    <div>
      <Image {...emojiMap[rating]} marginTop={2}/>
    </div>
  )
}

export default Emojis

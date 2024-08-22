import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Navbar</Text>
      </HStack>
    </div>
  )
}

export default Navbar

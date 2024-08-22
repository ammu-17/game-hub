import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.jpg'
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <div>
      <HStack justifyContent='space-between' padding='0px 16px'>
        <Image src={logo} boxSize='60px'/>
        <ColorModeSwitch />
      </HStack>
    </div>
  )
}

export default Navbar

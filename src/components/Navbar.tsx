import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.jpg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'

const Navbar = () => {
  return (
    <div>
      <HStack justifyContent='space-between' padding='10px 16px'>
        <Image src={logo} boxSize='60px'/> 
        <SearchInputs />
        <ColorModeSwitch />
      </HStack>
    </div>
  )
}

export default Navbar

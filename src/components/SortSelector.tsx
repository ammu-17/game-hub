import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <div>
          <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: Relavance
            </MenuButton>
            <MenuList> 
                <MenuItem>Relavance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem>
            </MenuList>
          </Menu>
        </div>
      )
}

export default SortSelector

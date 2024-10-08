import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectorSortOrder: (sortOrder: string) => void
    sortOrder: string;
}

const SortSelector = ({onSelectorSortOrder,sortOrder} : Props) => {

    const sortOrders = [
        {value: '' , label:'Relavance'},
        {value: '-added' , label:'Date added'},
        {value: 'name' , label:'Name'},
        {value: '-released' , label:'Release Date'},
        {value: '-metacritic' , label:'Popularity'},
        {value: '-rating' , label:'Average Rating'},
    ]

    const currentSortOrder = sortOrders.find(order=> order.value === sortOrder)

    return (
        <div>
          <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList> 
                {sortOrders.map(order=> 
                <MenuItem onClick={() => onSelectorSortOrder(order.value)} key={order.value} value={order.value}>
                    {order.label}
                </MenuItem>
            )}
            </MenuList>
          </Menu>
        </div>
      )
}

export default SortSelector

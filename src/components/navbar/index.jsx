import {
    Drawer,
    Radio,
    RadioGroup,
    Stack, 
    Button, 
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import { FiAlignJustify } from "react-icons/fi";
  import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div className='bg-nav'>
        <Button colorScheme='black' onClick={onOpen}>
        <FiAlignJustify size={30}/>
        </Button>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>DashBoard</DrawerHeader>
            <DrawerBody display={'flex'} flexDirection={'column'}>
              <Link to={"/dashboard"} >DashBoard</Link>
              <Link to={"/colmeias"}>Colmeias </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Wrap>
        <WrapItem>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </WrapItem>
        </Wrap>
      </div>
    )
  }

export default PlacementExample
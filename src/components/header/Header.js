// modules
import * as React from 'react';
import { HStack, Box, Image } from '@chakra-ui/react'  

// images
import logo from '../../assets/logo.png'
import login from '../../assets/loginIcon.svg';
import register from '../../assets/registerIcon.svg';

export default function Header() {

  return (

    <HStack
    bg="black"
    w='100%'
    h="auto"
    justifyContent="space-between">

        <Box>
            <Image w={80} h={80} ml={20} src={logo}/>
        </Box>

        <HStack
        w={150}>
            <Box>
                <Image w={30} ml={20} src={register}/>
            </Box>
            <Box>
                <Image w={35} ml={20} src={login}/>
            </Box>
        </HStack>
    </HStack>

 

  )
}
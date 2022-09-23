import {HStack, Box, Heading, Image, Text } from '@chakra-ui/react';

// images
import building from '../../assets/building.svg';
import location from '../../assets/location.svg';
import contact from '../../assets/contact.svg';
import email from '../../assets/email.svg';
import logo from '../../assets/logo.png';
export default function Footer () {

    return (
        <HStack
        w="100%"
        h={230}
        bg="black"
        spacing={270}>
            {/* content 1 */}
            <Box
            h="auto"
            w={300}
            p={20}>
                <Heading
                fontSize={20}
                color="white"
                mb={30}
                letterSpacing={2}
                fontWeight={400}
                >
                    ONDE NOS ENCONTRAR
                </Heading>


               <HStack
               spacing={20}>
                    <Image 
                    src={building}
                    w={40}/>
                    <Text
                    color="white"
                    fontSize={18}>
                        Av. Dep. José Alves dos Santos - Jardim Brasil
                    </Text>
               </HStack>

               <HStack
               spacing={20}
               mt={20}>
                    <Image 
                    src={location}
                    w={40}/>
                    <Text 
                    color="white"
                    fontSize={18}>
                        Maringá - PR, 87083-250
                    </Text>
               </HStack>
            </Box>
            {/* content 2 */}
            <Box>

                <Image w={150}src={logo}/>
                
            </Box>
            
            {/* content 3 */}
            <Box>
            <Heading
                fontSize={20}
                color="white"
                mb={30}
                letterSpacing={2}
                fontWeight={400}
                >
                    CONTATO
                </Heading>


               <HStack
               spacing={20}>
                    <Image 
                    src={contact}
                    w={27}/>
                    <Text
                    color="white"
                    fontSize={18}>
                        (44) 9 97568893
                    </Text>
               </HStack>

               <HStack
               spacing={20}
               mt={20}>
                    <Image 
                    src={email}
                    w={27}/>
                    <Text 
                    color="white"
                    fontSize={18}>
                        tattooArtStudio@gmail.com
                    </Text>
               </HStack>
            </Box>
        </HStack>
    )
}
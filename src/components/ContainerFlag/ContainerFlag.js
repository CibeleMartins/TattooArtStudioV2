import { HStack, Image} from '@chakra-ui/react';


const ContainerFlag = ({src})=> {

    return (

        <HStack>
            <Image src={src}/>
        </HStack>

    )
}

export default ContainerFlag;
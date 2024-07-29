import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    ButtonGroup,
    Grid
} from '@chakra-ui/react'
import { MdOutlineAdd, MdRemove } from "react-icons/md";
import { incremenQuantity, decrementQuantity } from '../store/store'
import { useDispatch } from 'react-redux';
import shirt from '../assets/shirt.jpg'
import tshirt from '../assets/tshirt.jpg'
import hoodie from '../assets/hoodie.jpg'
import pant from '../assets/pant.jpg'

const getImage = (type) => {
    switch (type) {
        case 'shirt':
            return shirt;
        case 't-shirt':
            return tshirt;
        case 'hoodie':
            return hoodie;
        case 'pant':
                return pant;    
        default:
            return null;
    }
};

function CartItem({ item }) {
    const dispatch = useDispatch()
    console.log(item)

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            w={{ lg: '70%' }} m="auto" mb="2rem" mt="2rem"
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={getImage(item.type)}
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>{item.title}</Heading>
                    <Text color='gray.600' fontSize='2xl' py="2">
                        {item.type}
                    </Text>
                    <Text color='blue.600' fontSize='sm'>
                        Quantity:{item?.quantity}
                    </Text>

                </CardBody>
                <CardFooter>
                    <ButtonGroup py="2" m="5">
                        <Grid w="full" templateColumns='repeat(2, 1fr)' gap={5}>
                            <Button variant='outline' colorScheme='purple' size='sm' onClick={() => dispatch(incremenQuantity(item))}>
                                <MdOutlineAdd />
                            </Button>
                            <Button variant='outline' colorScheme='red' size='sm' onClick={() => dispatch(decrementQuantity(item))}>
                                <MdRemove />
                            </Button>
                        </Grid>
                    </ButtonGroup>
                    <Text fontSize='md' as='b' py='2' ml='auto'>
                        Total: ${item.price * item.quantity}
                    </Text>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default CartItem
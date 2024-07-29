import React from 'react'
import {
    Card,
    Text,
    Stack,
    CardBody,
    Heading,
    Button,
    Image,
    Grid,
    CardFooter,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { incremenQuantity, decrementQuantity } from '../store/store'
import { MdOutlineAdd, MdRemove } from "react-icons/md";
import shirt from '../assets/shirt.jpg'
import tshirt from '../assets/tshirt.jpg'
import hoodie from '../assets/hoodie.jpg'
import pant from '../assets/pant.jpg'
import { useNavigate } from 'react-router-dom';

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


function CardProducts({ product }) {

    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.counter.cart.find((item) => item.id === product.id))
    // console.log(cartItem)
    const navigate = useNavigate()
    return (
        <Card maxW='sm' boxShadow='xl'>
            <CardBody onClick={() =>{
                navigate(`/product/${product.id}`)
            }}>
                
                    <Image
                        src={getImage(product.type)} 
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.title} </Heading>
                    <Text color='gray.500' fontSize='md'>
                        {product.type}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${product.price}
                    </Text>
                    {cartItem &&
                        <Text color='blue.600' fontSize='sm'>
                            Quantity:{cartItem?.quantity}
                        </Text>
                    }
                </Stack>
            </CardBody>
            <CardFooter>
                {!cartItem ?
                    <Button variant='solid' w="100%" colorScheme='purple' onClick={() => dispatch(incremenQuantity(product))}>
                        Add to cart
                    </Button>
                    : <Grid w="full" templateColumns='repeat(2, 1fr)' gap={5}>
                        <Button variant='outline' w="full" colorScheme='purple' size='md' onClick={() => dispatch(incremenQuantity(product))}>
                            <MdOutlineAdd />
                        </Button>
                        <Button variant='outline' colorScheme='purple' size='md' onClick={() => dispatch(decrementQuantity(product))}>
                            <MdRemove />
                        </Button>
                    </Grid>
                }
            </CardFooter>
        </Card>
    )
}

export default CardProducts
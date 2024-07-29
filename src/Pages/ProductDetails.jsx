import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardProducts from '../Components/CardProducts';
import {

    Center,
    Stack,
  
} from '@chakra-ui/react'


// Access your API key as an environment variable (see "Set up your API key" above)

function ProductDetails({data}) {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const fetchData = async () => {
        setProduct(data.filter((item) => item.id === parseInt(id))[0])
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Center>
            <Stack direction='column' spacing='24px'>
                <CardProducts product={product} />
            </Stack>
        </Center >
    )
}

export default ProductDetails
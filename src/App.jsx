import React from 'react'
import { Nav, ProductsList } from './Components'
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Cart from './Pages/Cart';

import ProductDetails from './Pages/ProductDetails';

import data from "./clothes.json"


function App() {

console.log(data)
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path='/' element={<ProductsList data={data.clothes} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails data={data.clothes}/>} />
      </Routes>
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        bg="gray.200"
        p={4}
        borderRadius="md"
        boxShadow="md"
      >
      </Box>
    </React.Fragment>
  )
}

export default App

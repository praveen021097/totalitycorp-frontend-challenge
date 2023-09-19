import React from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { CartItem } from '../Components/CartItem'
import { CartOrderSummary } from '../Components/CartOrderSummary'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from "react";
import { getToCart } from '../Services/CartServices/CartServices'
import { Dispatch } from 'redux'
import { isGetCartProductFailure, isGetCartProductSuccess } from '../Redux/CartReducer/actions'
import { ProductInfo } from './Products'
const Cart = () => {
  const cartData = useSelector((state:any)=>state.CartReducer.cart);
  const dispatch:Dispatch<isGetCartProductFailure |isGetCartProductSuccess> = useDispatch();
useEffect(()=>{
  if(cartData?.length===0){
    getToCart()(dispatch)
  }
},[cartData?.length,dispatch])
  console.log("cartData",cartData)
  return (
    <Box
    maxW={{ base: '3xl', lg: '7xl' }}
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'flex-start' }}
      spacing={{ base: '8', md: '16' }}
    >
      <Stack spacing={{ base: '8', md: '10' }} flex="2">
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart (3 items)
        </Heading>

        <Stack spacing="6">
          {cartData.map((item:ProductInfo) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
  )
}

export default Cart

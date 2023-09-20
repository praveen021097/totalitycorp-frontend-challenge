import React from 'react';

import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
  Text,
  Button
} from '@chakra-ui/react'
import { CloseButton, Icon, Select, useColorModeValue, Image } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { CartOrderSummary } from '../Components/CartOrderSummary'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { deleteProductFromCart, getToCart, productQuantityDecrease, productQuantityIncrease } from '../Services/CartServices/CartServices'
import { Dispatch } from 'redux'
import { isCartProductDeleteFailure, isCartProductDeleteSuccess, isCartProductIncreaseFailure, isCartProductIncreaseSuccess, isGetCartProductFailure, isGetCartProductSuccess } from '../Redux/CartReducer/actions'
import { ProductInfo } from './Products'
const Cart = () => {
  const cartData = useSelector((state: any) => state.CartReducer.cart);
  const dispatch: Dispatch<isGetCartProductFailure | isGetCartProductSuccess | isCartProductIncreaseSuccess | isCartProductIncreaseFailure | isCartProductDeleteFailure | isCartProductDeleteSuccess> = useDispatch();
  const [counter, setCounter] = useState<number>(1);
  const [subTotal, setSubTotal] = useState<number>(0);


  const subtotalOfCartProducts = (cartItems: ProductInfo[]) => {

    const total: number = cartItems.reduce((acc, curr) => curr.price + acc, 0)
    setSubTotal(prev=>prev=total)
  }
  useEffect(() => {

    if (cartData?.length === 0) {
      getToCart()(dispatch)
      subtotalOfCartProducts(cartData)
    }
  }, [counter, cartData?.length, dispatch])

  
  

  
console.log("hisubtotal", subTotal);
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
            {cartData.length > 0 && cartData.map((item: ProductInfo) => {
              return <Flex direction={{ base: 'column', md: 'row' }} key={item.id} justify="space-between" align="center">
                {/* <CartProductMeta
              name={title}
              image={image}
              isGiftWrapping={isGiftWrapping}
            /> */}
                <Stack direction="row" spacing="5" width="full">
                  <Image
                    rounded="lg"
                    width="120px"
                    height="120px"
                    fit="cover"
                    src={item.image}
                    alt={item.title}
                    draggable="false"
                    loading="lazy"
                  />
                  <Box pt="4">
                    <Stack spacing="0.5">
                      <Text fontWeight="medium">{item.title}</Text>

                    </Stack>

                  </Box>
                </Stack>
                {/* Desktop */}
                <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>


                  <Flex width={"120px"}>
                    <Box w={"40px"} >
                      <Button variant={"outline"} onClick={() => {
                        setCounter(prev => prev - 1)

                        const payload = { ...item };
                        if (payload.quantity != 0 && payload.quantity >= 2) {

                          payload.price = payload.price - (payload.price / payload.quantity);
                          payload.quantity = payload.quantity - 1;
                          productQuantityDecrease(item.id, payload)(dispatch)
                          getToCart()(dispatch)
                          subtotalOfCartProducts(cartData)
                        }

                      }}><Icon as={MinusIcon} w={3} h={3} /></Button>
                    </Box>
                    <Box w={"40px"}><Text pt={2}>{item.quantity}</Text></Box>
                    <Box w={"40px"} >
                      <Button variant={"outline"} onClick={() => {
                        setCounter(prev => prev + 1)

                        const payload = { ...item };
                        payload.quantity = payload.quantity + 1;
                        payload.price = payload.price + (payload.price / (payload.quantity - 1))
                        productQuantityIncrease(item.id, payload)(dispatch)
                        getToCart()(dispatch)
                        subtotalOfCartProducts(cartData)

                      }}> <Icon as={AddIcon} w={3} h={3} /></Button>
                    </Box>
                  </Flex>
                  <CloseButton aria-label={`Delete ${item.title} from cart`} onClick={() => {

                    deleteProductFromCart(item.id)(dispatch);
                    getToCart()(dispatch)
                    subtotalOfCartProducts(cartData)

                  }} />
                </Flex>

                {/* Mobile */}
                <Flex
                  mt="4"
                  align="center"
                  width="full"
                  justify="space-between"
                  display={{ base: 'flex', md: 'none' }}
                >
                  <Link fontSize="sm" textDecor="underline">
                    Delete
                  </Link>

                  {/* <PriceTag price={price} currency={currency} /> */}
                </Flex>
              </Flex>
            }
              // <CartItem key={item.id} {...item} />

            )}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary  />
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

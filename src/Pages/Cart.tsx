import React from 'react';
import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
  Text,
  Button
} from '@chakra-ui/react';
import { CloseButton, Icon, Image } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { deleteProductFromCart, getToCart, productQuantityDecrease, productQuantityIncrease } from '../Services/CartServices/CartServices'
import { Dispatch } from 'redux'
import { isCartProductDeleteFailure, isCartProductDeleteSuccess, isCartProductIncreaseFailure, isCartProductIncreaseSuccess, isGetCartProductFailure, isGetCartProductSuccess } from '../Redux/CartReducer/actions'
import { ProductInfo } from './Products';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Cart = () => {
  const cartData = useSelector((state: any) => state.CartReducer.cart);
  const dispatch: Dispatch<isGetCartProductFailure | isGetCartProductSuccess | isCartProductIncreaseSuccess | isCartProductIncreaseFailure | isCartProductDeleteFailure | isCartProductDeleteSuccess> = useDispatch();
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    if (cartData?.length === 0) {
      getToCart()(dispatch)
    }
  }, [counter, cartData?.length, dispatch])
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
            Shopping Cart {`(${cartData.length})`} item
          </Heading>

          <Stack spacing="6">
            {cartData.length > 0 && cartData.map((item: ProductInfo) => {
              return <Flex direction={{ base: 'column', md: 'row' }} key={item.id} justify="space-between" align="center">
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
                      <Text fontWeight="medium">{`Rs.${item.price}`}</Text>
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
                          payload.price = payload.price - Math.floor((payload.price / payload.quantity));
                          payload.quantity = payload.quantity - 1;
                          productQuantityDecrease(item.id, payload)(dispatch)
                          getToCart()(dispatch)
                        }

                      }}><Icon as={MinusIcon} w={3} h={3} /></Button>
                    </Box>
                    <Box w={"40px"}><Text pt={2}>{item.quantity}</Text></Box>
                    <Box w={"40px"} >
                      <Button variant={"outline"} onClick={() => {
                        setCounter(prev => prev + 1)
                        const payload = { ...item };
                        payload.quantity = payload.quantity + 1;
                        payload.price = payload.price +Math.floor((payload.price / (payload.quantity - 1)))
                        productQuantityIncrease(item.id, payload)(dispatch)
                        getToCart()(dispatch)
                      }}> <Icon as={AddIcon} w={3} h={3} /></Button>
                    </Box>
                  </Flex>
                  <CloseButton aria-label={`Delete ${item.title} from cart`} onClick={() => {
                    deleteProductFromCart(item.id)(dispatch);
                    getToCart()(dispatch)
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
                  
                </Flex>
              </Flex>
            }
            )}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          {/* cart Order Summary */}
          <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
            <Heading size="md">Order Summary</Heading>

            <Stack spacing="6">
              <Flex justify="space-between">
                <Text fontSize="lg" fontWeight="semibold">
                  Total
                </Text>
                <Text fontSize="xl" fontWeight="extrabold">
                 {cartData.length>0 && cartData.reduce((acc:number,curr:ProductInfo)=>acc+curr.price,0) }
                </Text>
              </Flex>
            </Stack>
            <Link to="/payment"><Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
              Checkout
            </Button></Link>
          </Stack>
          {/* card Order Summary end */}
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link  to={"/"}><Text color={mode('blue.500', 'blue.200')}>Continue shopping</Text></Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Cart

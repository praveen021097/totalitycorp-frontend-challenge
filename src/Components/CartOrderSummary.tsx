import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
import { ProductInfo } from '../Pages/Products'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { isGetCartProductFailure, isGetCartProductSuccess } from '../Redux/CartReducer/actions'
import { getToCart } from '../Services/CartServices/CartServices'
 
  
  type OrderSummaryItemProps = {
    label: string
    value?: string
    children?: React.ReactNode
  }
  
  type CartOrder ={
    data :ProductInfo[]
  }
  const OrderSummaryItem = (props: OrderSummaryItemProps) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = () => {
    const cartData = useSelector((state:any)=>state.CartReducer.cart);
    const dispatch:Dispatch<isGetCartProductFailure|isGetCartProductSuccess> = useDispatch();
    const [total,setTotal] = useState<number>(0);
      console.log(typeof cartData)
    useEffect(()=>{
      if(cartData?.length===0){
        getToCart()(dispatch)
      }
      
    },[])


    
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={`343`} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {87879}
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Checkout
        </Button>
      </Stack>
    )
  }


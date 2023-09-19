import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { isGetProductFailure, isGetProductSuccess } from '../Redux/ProductReducer/actions';
import { getProducts } from '../Services/ProductService/ProductService';
import { Box, Grid, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, ButtonGroup, GridItem, Flex, Select, HStack } from '@chakra-ui/react';
import { addTocart, getToCart } from '../Services/CartServices/CartServices';
import { isAddProductFailure, isAddProductSuccess } from '../Redux/CartReducer/actions';
import { ActionTypes } from '../Redux/CartReducer/actionTypes';

export interface ProductInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}
const userData = JSON.parse(localStorage.getItem('userDetails') || '{}');
const Products = () => {
  const product:ProductInfo[] = useSelector((state: any) => state.ProductReducer.products);
  const cartItems:ProductInfo[] = useSelector((state:any)=> state.CartReducer.cart);
  const dispatch: Dispatch<isGetProductFailure | isGetProductSuccess |isAddProductFailure |isAddProductSuccess> = useDispatch();
  const [sortedProducts,setSortedProducts] = useState<ProductInfo[]>(product);
  const [buttonDisable,setButtonDisable] =useState<Boolean | undefined>(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
        if(product?.length === 0 ){
          getProducts()(dispatch);
          
        }
        setSortedProducts(product);
        
  }, [product?.length,dispatch,setSortedProducts]);

  useEffect(() => {
    if(cartItems?.length ===0 ){
  
      getToCart()(dispatch)
    }
    
    
}, [cartItems?.length,dispatch,]);

 console.log("sortedproduct",sortedProducts)

  const sortBy:React.ChangeEventHandler<HTMLSelectElement> =(e)=>{
  
      if(e.target.value ==="ascByCategory"){
        
       const sortedByAsc = product.sort((a, b) => (a.category < b.category) ? -1 : 1)
       console.log("sortedData",sortedByAsc)
       sortedByAsc.length>0 && setSortedProducts(prev=>prev=sortedByAsc);
      }
      else if(e.target.value ==="descByCategory"){
        const sortedByDes = product.sort((a, b) => (a.category > b.category) ? -1 : 1)
       console.log("sortedData",sortedByDes)
       sortedByDes.length>0 && setSortedProducts(prev=>prev=sortedByDes);
      }
      else if(e.target.value ==="ascByPrice"){
        const sortedByDes = product.sort((a, b) => (a.price - b.price) )
       console.log("sortedData",sortedByDes)
       sortedByDes.length>0 && setSortedProducts(prev=>prev=sortedByDes);
      }
      else if(e.target.value ==="descByPrice"){
        const sortedByDes = product.sort((a, b) => (b.price - a.price) )
       console.log("sortedData",sortedByDes)
       sortedByDes.length>0 && setSortedProducts(prev=>prev=sortedByDes);
      }
      else if(e.target.value ==="ascByRating"){
        const sortedByDes = product.sort((a, b) => (a.rating - b.rating))
       console.log("sortedData",sortedByDes)
       sortedByDes.length>0 && setSortedProducts(prev=>prev=sortedByDes);
      }
      else if(e.target.value ==="descByRating"){
        const sortedByDes = product.sort((a, b) => (b.rating - a.rating) )
       console.log("sortedData",sortedByDes)
       sortedByDes.length>0 && setSortedProducts(prev=>prev=sortedByDes);
      }
      else{
        setSortedProducts(product)
      }
    }
     
    
  return (
    <div style={{ backgroundColor: "skyblue",width:"100%"}}  >
      <Navbar name={userData.userName} />

      <Flex justifyContent={"space-between"}  alignContent={"center"} gap={3} pt={24}   >
        <Box  bg={"white"} h={"300px"} borderRadius={"10px"} w={"20%"} position={"sticky"}>
          <Text color='blue.600' fontSize='2xl' fontWeight={"500"}>
            Sort Products
          </Text>
          <HStack spacing={4} flexDirection={"column"}>
            <Select placeholder='sortByCategory' onChange={sortBy}>
              
              <option value='ascByCategory'>Ascending</option>
              <option value='descByCategory'>Descending</option>
            </Select>
            <Select placeholder='sortByPrice' onChange={sortBy}>
            
              <option value='ascByPrice'>Ascending</option>
              <option value='descByPrice'>Descending</option>
            </Select>
            <Select placeholder='sortByRating' onChange={sortBy}>
              
              <option value='ascByRating'>Ascending</option>
              <option value='descByRating'>Descending</option>
            </Select>
          </HStack>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)' templateRows={"repeat(7,1fr)"} gap={6} w={"73%"}  >
          {sortedProducts.map((item: ProductInfo) => {
            return <GridItem w='100%' h={"400px"} key={item.id} >
              <Card  >
                <CardBody>
                  <Image
                    src={item.image}
                    alt={item.title}
                    borderRadius='lg'
                    width={"100%"}
                    height={"180px"}
                  />
                  <Stack mt='1' spacing='3'>
                    
                      <Text color='blue.600' fontSize='xl' fontWeight={"500"}>
                        {item.category}
                      </Text>
                      <Text color='blue.600' fontSize='xl' fontWeight={"500"}>
                        {item.title}
                      </Text>
                     
                   
                    <Text color='blue.600' fontSize='xl' mt={"-8px"}>
                      {`Rs.${item.price}`}
                    </Text>
                   
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='1' mt={"-10px"}>
                    <Button variant="outline" colorScheme='blue' ref={buttonRef}  onClick={()=>{
                    let flag:Boolean = cartItems.length>0 && cartItems.find((el)=>el.id!==item.id)?false:true;
                    setButtonDisable(flag);


                    
                    
                     
                        addTocart(item)(dispatch)
                        if(buttonRef.current){
                          buttonRef.current.setAttribute("disabled","true");

                        }
                    
                    
                  }}>
                      Add To Cart
                    </Button>
                  </ButtonGroup>
                  <Text  fontSize={"17px"} ml={"40px"} fontFamily={"cursive"} fontWeight={"550"}>Rating:-{item.rating}</Text>
                </CardFooter>
              </Card>
            </GridItem>
          })}
        </Grid>
      </Flex>

    </div>
  )
}

export default Products

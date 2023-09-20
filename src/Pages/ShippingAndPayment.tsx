import React from 'react';
import { useState } from "react";
import { Box, Heading, FormControl, FormLabel, GridItem, Select, Input, Grid, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
export const ShippingAndPayment = () => {
    const [show, setShow] = useState<Boolean>(false);
    const [address,setAddress] = useState({
            street_address:"",
            city:"",
            state:"",
            postal_code:""
    });


     const setFormAddress:React.ChangeEventHandler<HTMLInputElement>  =(e)=>{
            e.preventDefault();
            const {name,value} = e.target;
            setAddress({
                ...address,
                [name]:value
            })

     }

     console.log("address",address)
    return (
        <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form">
            {show==false?<Box>
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    User Details
                </Heading>
                

                <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                        mt="2%">
                        Street address
                    </FormLabel>
                    <Input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={setFormAddress}
                    />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                        htmlFor="city"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                        mt="2%">
                        City
                    </FormLabel>
                    <Input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={setFormAddress}
                    />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                        htmlFor="state"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                        mt="2%">
                        State / Province
                    </FormLabel>
                    <Input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="state"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={setFormAddress}
                    />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                        htmlFor="postal_code"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                        mt="2%">
                        ZIP / Postal
                    </FormLabel>
                    <Input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={setFormAddress}
                    />
                </FormControl>
                <Box mt={"10px"}>
                    <Button colorScheme='blue' w={"200px"} onClick={()=>{
                       
                        if(address.city!="" && address.postal_code!="" && address.state!="" && address.street_address!=""){
                            console.log("hello")
                            setShow(!show)
                        }
                    }}>Submit</Button>
                </Box>
            </Box>:<Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form">
                <Text fontSize={"18px"} fontFamily={"cursive"} fontWeight={"550"}>{`${address.street_address},${address.city},${address.postal_code},(${address.state})`}</Text>
                </Box>}
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form">
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">Payment information</Heading>
                <Grid templateColumns='repeat(4, 1fr)' templateRows={'repeat(3,1fr)'} gap={6}>
                    <GridItem w='100%' colSpan={2} borderRadius={"10px"}>
                        <FormControl>
                            <FormLabel>Credit card number</FormLabel>
                            <Input type='number' name={"cardNumber"} />
                        </FormControl>
                    </GridItem>
                    <GridItem w='100%' colSpan={2} borderRadius={"10px"} >
                        <FormControl>
                            <FormLabel>Name on card</FormLabel>
                            <Input type='text' name={"cardName"}/>
                        </FormControl>
                    </GridItem>
                    <GridItem w='100%' borderRadius={"10px"} >
                        <FormControl>
                            <FormLabel>Expiry date</FormLabel>
                            <Input type='date' name={"expiryDate"} />
                        </FormControl>
                    </GridItem>
                    
                    <GridItem w='100%' colSpan={2} borderRadius={"10px"} >
                        <FormControl>
                            <FormLabel>CVV/CVC</FormLabel>
                            <Input type='number' name={"cvv"}/>
                        </FormControl>
                    </GridItem>
                    <GridItem w='100%' borderRadius={"10px"} pt={8} >
                        <Link to={show?"/":""}><Button colorScheme='blue' w={"200px"} onClick={()=>{
                            alert("happy journey, buy more!")
                        }}>Submit & By</Button></Link>
                    </GridItem>
                </Grid>
            </Box>
            {/* Payment Information */}
            

        </Box>
    )
}



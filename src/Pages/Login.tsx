import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { Dispatch } from "redux";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import { loginService } from '../Services/AuthService/AuthServie';
import { userInfo } from 'os';
import { isLoginFailure, isLoginSuccess } from '../Redux/AuthReducer/actions';
import { ActionTypes } from '../Redux/AuthReducer/actionTypes';
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
export interface UserInfo {
    userName: string;
    email: string;
    password: string;
}


const Login = () => {
    // const [formData,setFormData] = useState<UserInfo[]>([]);
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const location = useLocation();
    const navigate = useNavigate()
    const commingFrom = location.state?.from?.pathname || "/"
    const dispatch:Dispatch<isLoginFailure | isLoginSuccess> = useDispatch()
    const changEmailHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmail(e.target.value);
    }
    const changPasswordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value);
    }
    const changUserNameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUserName(e.target.value);
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if(userName!="" && email!="" && password!=""){
            const payload ={
                userName:userName,
                email:email,
                password:password
            }
           loginService(payload)(dispatch).then((res)=>{
                if(res == ActionTypes.LOGIN_SUCCESS){
                    alert("login successfully")
                    navigate(commingFrom,{replace:true})
                }
                else{
                    alert("something went wrong")
                }
           })
           
        }
        

    }
    
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>

                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="fullName">
                            <FormLabel>Full Name</FormLabel>
                            <Input type="email" name="userName" onChange={changUserNameHandler} />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" name="email" onChange={changEmailHandler} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name="password" onChange={changPasswordHandler} />
                        </FormControl>
                        <Stack spacing={10}>

                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={handleSubmit}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Login

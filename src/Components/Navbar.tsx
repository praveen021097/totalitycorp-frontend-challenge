import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Heading,
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
  import {Link} from "react-router-dom";
  interface Props {
    children: React.ReactNode | React.ReactNode[];
  }
  interface User{
    name:string;
  }
  const Links = ['Products', 'Cart', 'Checkout']
  
  const NavLink = (props: Props) => {
    const { children } = props
  
    return (
      <Box
        // as="a"
        px={3}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        // href={'#'}
        fontSize={"20px"}
        fontFamily={"cursive"}
        >
        <Link to={`/${children}`}>{children}</Link>
      </Box>
    )
  }
const Navbar = ({name}:User) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} w={"100%"} position={"fixed"} zIndex={1000}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box pl={"20px"}><Link to="/"><Heading>Totality</Heading></Link></Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} marginLeft={"200px"}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                    <Flex justifyContent={"space-between"} gap={2} alignContent={"center"}><Text mt={"5px"} color={"black"}>{name}</Text>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  /></Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
  
     
      </>
    )
}

export default Navbar

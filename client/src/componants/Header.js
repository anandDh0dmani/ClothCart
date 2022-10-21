import { Flex, Box, Heading, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import { HiShoppingBag, HiOutlineMenuAlt3, HiUser } from "react-icons/hi";
// import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from "react-icons/hi";

const Header = () => {
    const [show, setShow] = useState(false);

    return(
        <Flex 
            as='header'
            align='center'
            justify='space-between'
            wrap='wrap'
            py='6'
            px='6'  
            bgColor='gray.800'
            w='100%'    
            top='0'
            pos='fixed' 
            zIndex='99'>
            <Heading
                as='h1'
                color='whiteAlpha.600'  
                fontWeight='bold'
                size='md'
                letterSpacing='md'>
                    <Link 
                        href="/"
                        _hover={{ color:'gray.500', textDecoration: 'bold'}}
                        >
                        ClothCart!
                    </Link>
            </Heading>
            <Box
                display={{base:'block', md:'none'}}
                onClick={() => setShow(!show)}>
                    <Icon as={HiOutlineMenuAlt3} color='white' w='5' m='5' />
            </Box>

            <Box
                display={{base: show ? 'block' : 'none', md:'flex'}}
                width={{base: 'full', md:'auto'}}
                mt={{base:'5', md:'5'}}
                lineHeight={{base: '2', md:'2'}}
                alignItems='center'>
                <Link
                    href="/cart"
                    fontSize='sm'
                    letterSpacing='wide'
                    color='whiteAlpha.600'
                    fontWeight='bold'
                    textTransform='uppercase'
                    mr='5'
                    display='flex'
                    alignItem='center'
                    _hover={{color:'whiteAlpha.900'}}>
                    <Icon as={HiShoppingBag} mr='1' w='4' h='4' />
                    Cart                    
                </Link>   
                <Link
                    href="/login"
                    fontsize='sm'
                    letterSpacing='wide'
                    color='whiteAlpha.600'
                    fontWeight='bold'
                    textTransform='uppercase'
                    mr='5'
                    display='flex'
                    alignItems='center'
                    _hover={{color:'whiteAlpha.900'}}>
                    <Icon as={HiUser} mr='1' w='4' h='4' />
                    Login                    
                </Link>   
            
            </Box>


        </Flex>
    );
};

export default Header;

// import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react';
// import { useState } from 'react';
// import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from 'react-icons/hi';

// const Header = () => {
// 	const [show, setShow] = useState(false);

// 	return (
// 		<Flex
// 			as='header'
// 			align='center'
// 			justify='space-between'
// 			wrap='wrap'
// 			py='6'
// 			px='6'
// 			bgColor='gray.800'
// 			w='100%'
// 			top='0'
// 			pos='fixed'
// 			zIndex='99'>
// 			<Heading
// 				as='h1'
// 				color='whiteAlpha.800'
// 				fontWeight='bold'
// 				size='md'
// 				letterSpacing='md'>
// 				<Link href='/' _hover={{ color: 'gray.500', textDecoration: 'none' }}>
// 					RST Store
// 				</Link>
// 			</Heading>

// 			<Box
// 				display={{ base: 'block', md: 'none' }}
// 				onClick={() => setShow(!show)}>
// 				<Icon as={HiOutlineMenuAlt3} color='white' w='5' h='5' />
// 			</Box>

// 			<Box
// 				display={{ base: show ? 'block' : 'none', md: 'flex' }}
// 				width={{ base: 'full', md: 'auto' }}
// 				mt={{ base: 5, md: 0 }}
// 				lineHeight={{ base: 2, md: 0 }}
// 				alignItems='center'>
// 				<Link
// 					href='/cart'
// 					fontSize='sm'
// 					letterSpacing='wide'
// 					color='whiteAlpha.600'
// 					fontWeight='bold'
// 					textTransform='uppercase'
// 					mr='5'
// 					display='flex'
// 					alignItems='center'
// 					_hover={{ color: 'whiteAlpha.800' }}>
// 					<Icon as={HiShoppingBag} mr='1' w='4' h='4' />
// 					Cart
// 				</Link>

// 				<Link
// 					href='/cart'
// 					fontSize='sm'
// 					letterSpacing='wide'
// 					color='whiteAlpha.600'
// 					fontWeight='bold'
// 					textTransform='uppercase'
// 					mr='5'
// 					display='flex'
// 					alignItems='center'
// 					_hover={{ color: 'whiteAlpha.800' }}>
// 					<Icon as={HiUser} mr='1' w='4' h='4' />
// 					Login
// 				</Link>
// 			</Box>
// 		</Flex>
// 	);
// };

// export default Header;

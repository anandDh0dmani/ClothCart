import { Flex, Box, Heading, Icon, Link, textDecoration } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt2, HiShoppingBag, HiUser } from "react-icons/hi";

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
                        _hover={{ color:'gray.500', textDecoration:'none'}}>
                            ClothCart!
                    </Link>
            </Heading>
            <Box
                display={{base:'block', md:'none'}}
                onClick={() => setShow(!show)}>
                    <Icon as={HiOutlineMenuAlt2} color='white' w='5' m='5' />
            </Box>

            <Box
                display={{base: show ? 'block' : 'none', md:'flex'}}
                width={{base: 'full', md:'auto'}}
                mt={{base:'5', md:'5'}}
                lineHeight={{base: '2', md:'2'}}
                alignItems='center'>
                <Link
                    href="/cart"
                    fontsize='sm'
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
                    alignItem='center'
                    _hover={{color:'whiteAlpha.900'}}>
                    <Icon as={HiUser} mr='1' w='4' h='4' />
                    Login                    
                </Link>   
            
            </Box>


        </Flex>
    );
};

export default Header;

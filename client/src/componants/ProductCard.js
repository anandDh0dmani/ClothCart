import { Box, Flex, Link, Text, Heading, Image } from "@chakra-ui/react";
import Rating from "./Rating";
import { Link as RouterLink } from "react-router-dom";
const ProductCard = ({product}) => { 
    return (
        <Link as={RouterLink} to={`/product/${product._id}`} _hover={{ textDecor: 'none'}}>
            <Box 
                maxW='sm'
                borderRadius='lg'
                bgColor='white' 
                overflow="hidden"
                _hover={{shadow:'md'}}>
                    <Image 
                        src={product.image}
                        alt={product.name}
                        h='430px'
                        w='100%'
                        objectFit='cover'
                    />
                    <Flex py='5' px='4' direction='column' justifyContent='space-between'>
                        <Heading as='h4' fontSize='xl' mb='3'>
                            {product.name}
                        </Heading>
                        <Flex alignItems='center' justifyContent='space-between'>
                            <Rating value = {product.rating} />
                            <Text fontSize='2xl' fontWeight='bold' conlor='blue.600'>
                                ₹{product.price}
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
        </Link>

    );
};

export default ProductCard;
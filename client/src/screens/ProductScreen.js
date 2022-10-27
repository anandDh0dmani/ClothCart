import { Flex, Button, Heading, Grid, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

import Rating from '../componants/Rating';

const ProductScreen = () => {
    const [product, setProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${id}`);
			
			setProduct(data);
		}

		fetchProduct();
	},[id]);

    return (
        <>
            <Flex mb='5'>
                <Button as={RouterLink} to='/' colorScheme='gray'>
                    Go Back!
                </Button>

            </Flex>

            <Grid templateColumns='5fr 4fr 3fr' gap='10'>
                <Image src={product.image} alt={product.name} borderRadius='mb'/>

                <Flex direction='column'>
                    <Heading as='h6' fontSize='base' color='gray.500'>
						{product.brand}
					</Heading>

					<Heading as='h2' fontSize='4xl' mb='2'>
						{product.name}
					</Heading>

					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>

                    <Heading
						as='h5'
						my='5'
						fontSize='2xl'
						fontWeight='bold'
						color='teal.600'>
						₹{product.price}
					</Heading>

					<Text>{product.description}</Text>
                </Flex>

                <Flex direction='column'>
					<Flex justifyContent='space-between' py='2'>
						<Text>Price: </Text>
						<Text fontWeight='bold'>₹{product.price}</Text>
					</Flex>

					<Flex justifyContent='space-between' py='2'>
						<Text>Status: </Text>
						<Text fontWeight='bold'>
							{product.countInStock > 0 ? 'In Stock' : 'Not Available'}
						</Text>
					</Flex>

					<Button
						bgColor='gray.800'
						colorScheme='teal'
						my='2'
						textTransform='uppercase'
						letterSpacing='wide'
						disabled={product.countInStock === 0}>
						Add To Cart
					</Button>
				</Flex>
                    
            </Grid>

        </>
    );

};

export default ProductScreen;
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex as='Footer' justifyContent='center' py='5'>
            <Text>
                Copyright {new Date().getFullYear}. ClothCart. All Rights Reserved.
            </Text>
        </Flex>
    );
};

export default Footer;
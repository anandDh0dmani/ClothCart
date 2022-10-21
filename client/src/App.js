import Header from "./componants/Header";
import Footer from "./componants/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Flex } from "@chakra-ui/react";

const  App = () => {
  return (
    <div>
      <Header />
      <Flex 
        as='main'
        mt='72'
        direction='column'
        minH='xl'
        py='6'
        px='6'
        bgColor='gray.200'>
        <HomeScreen />
      </Flex>
        {/* Clothing Store! */}
        {/* <div style={{height:'500px'}}></div> */}
      <Footer />
    </div>
  );
};

export default App;

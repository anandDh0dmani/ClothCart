import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./componants/Header";
import Footer from "./componants/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const  App = () => {
  return (
       
    <BrowserRouter>
      <Header />
        <Flex 
          as='main'
          mt='72'
          direction='column'
          minH='xl'
          py='6'
          px='6'
          bgColor='gray.200'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen /> } />
          </Routes>
      
        </Flex>
      <Footer />
    </BrowserRouter>
    
      // {/* Clothing Store! */}
      // {/* <div style={{height:'500px'}}></div> */}
    
     );
};

export default App;

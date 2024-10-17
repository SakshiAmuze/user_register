import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Header";
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Outlet></Outlet>

    </ChakraProvider>
  );
}

export default App;
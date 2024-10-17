// Import necessary Chakra UI components
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";// If you are using React Router

// Create your Header component
function Header() {
  return (
    <ChakraProvider>
      <Box bg="blue.900" p={6}>
        <Flex align="center"  justifyContent="center">
          <Heading as="h1" size="xl" color="white">
User Registration Process
          </Heading>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Header;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import { insertUser } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const Form3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userpass, setUserPassword] = useState("");
  const [confirmUserPassword, setConfirmUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [confirmUserPasswordError, setConfirmUserPasswordError] = useState("");

  const validateuserPassword = () => {
    if (userpass.length < 4 || userpass.length > 8) {
      setUserPasswordError("Password must be between 4 and 8 characters");
    } else {
      setUserPasswordError("");
    }
  };

  const validateConfirmUserPassword = () => {
    if (confirmUserPassword !== userpass) {
      setConfirmUserPasswordError("Passwords do not match");
    } else {
      setConfirmUserPasswordError("");
    }
  };

  const handleRegister = () => {
    // Validate userpass and confirm userpass before proceeding
    validateuserPassword();
    validateConfirmUserPassword();

    // If both userpasswords are valid, proceed to register
    if (!userPasswordError && !confirmUserPasswordError && confirmUserPassword.trim() !== "") {
      const userData = {
        userpass,
      };

      dispatch(insertUser([userData]));

      // Reset the input fields
      setUserPassword("");
      setConfirmUserPassword("");

      navigate("/details");
    }
  };

  return (
    <VStack
      border="1px solid black"
      p={6}
      m={4}
      mx="auto"
      maxW="400px" // Set maximum width for responsiveness
    >
      <Heading as="h2" size="lg">
        Part 3
      </Heading>
      <FormControl isInvalid={!!userPasswordError}>
        <FormLabel>Enter Password</FormLabel>
        <Input
          type="password"
          value={userpass}
          onChange={(e) => setUserPassword(e.target.value)}
          onBlur={validateuserPassword}
        />
        <FormErrorMessage>{userPasswordError}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!confirmUserPasswordError}>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          value={confirmUserPassword}
          onChange={(e) => setConfirmUserPassword(e.target.value)}
          onBlur={validateConfirmUserPassword}
        />
        <FormErrorMessage>{confirmUserPasswordError}</FormErrorMessage>
      </FormControl>

      <Button onClick={handleRegister} bg="blue.700" color="white" mt={4}>
        Register
      </Button>
    </VStack>
  );
};

export default Form3;

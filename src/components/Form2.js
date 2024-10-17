import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Button,
  Input,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { insertUser } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

export default function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // If validations pass, proceed to store the data
    if (!errors.usercity && !errors.userstate) {
      const userData = {
        usercity: data.usercity,
        userstate: data.userstate,
      };

      dispatch(insertUser([userData])); // Update the Redux store if needed
      navigate("/form-3");
    }
  };

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      border="1px solid black"
      p={6}
      m={4}
      mx="auto"
      maxW="400px" // Set maximum width for responsiveness
    >
      <Heading as="h2" size="lg">
        Part 2
      </Heading>
      <FormControl isInvalid={!!errors.usercity}>
        <FormLabel>City</FormLabel>
        <Input
          type="text"
          {...register("usercity", { required: "City is required" })}
        />
        <FormErrorMessage>
          {errors.usercity && errors.usercity.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.userstate}>
        <FormLabel>State</FormLabel>
        <Input
          type="text"
          {...register("userstate", { required: "State is required" })}
        />
        <FormErrorMessage>
          {errors.userstate && errors.userstate.message}
        </FormErrorMessage>
      </FormControl>

      <Button type="submit" bg="blue.700" color="white" mt={4}>
        Next
      </Button>
    </VStack>
  );
}

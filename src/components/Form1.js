import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { insertUser } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

export default function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userData = {
      username: data.username,
      usermobile: data.usermobile,
      useremail: data.useremail,
    };

    dispatch(insertUser([userData]));
    navigate("/form-2");
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
        Part 1
      </Heading>
      <FormControl isInvalid={!!errors.username}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          {...register("username", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must have at least 2 letters",
            },
          })}
        />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.usermobile}>
        <FormLabel>Mobile</FormLabel>
        <Input
          type="text"
          {...register("usermobile", {
            required: "Mobile is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Mobile number must have exactly 10 digits",
            },
          })}
        />
        <FormErrorMessage>
          {errors.usermobile && errors.usermobile.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.useremail}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          {...register("useremail", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        <FormErrorMessage>
          {errors.useremail && errors.useremail.message}
        </FormErrorMessage>
      </FormControl>
      <Button type="submit" bg="blue.700" color="white" mt={4}>
        Next
      </Button>
    </VStack>
  );
}

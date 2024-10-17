import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VStack, Text, Heading } from "@chakra-ui/react";
import { insertUser } from "../redux/reducers/userSlice";

export default function Detail() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.value);
  const [dataStored, setDataStored] = useState(false);

  useEffect(() => {
    // Check if data has already been stored
    if (!dataStored) {
      const flattenedData = userData.reduce((acc, form) => {
        return { ...acc, ...form };
      }, {});

      storeDataInDatabase(flattenedData);
      setDataStored(true); // Set the flag to indicate data has been stored
    }
  }, [userData, dataStored]);

  const storeDataInDatabase = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data stored successfully in the database");
        dispatch(insertUser(data)); // Update the Redux store if needed
      } else {
        console.error("Failed to store data in the database");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(userData);

  return (
    <VStack
    border="1px solid black"
    p={6}
    m={4}
    mx="auto"
    maxW="400px" // Set maximum width for responsiveness
  >
    <Heading as="h2" size="lg" color="green">
      User Details Added!
    </Heading>
    <Text>Name: {userData[0]?.username}</Text>
    <Text>Mobile: {userData[0]?.usermobile}</Text>
    <Text>Email: {userData[0]?.useremail}</Text>
    <Text>City: {userData[1]?.usercity}</Text>
    <Text>State: {userData[1]?.userstate}</Text>
    <Text>Password: {userData[2]?.userpass}</Text>
  </VStack>
  );
}

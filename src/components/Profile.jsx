import { Flex, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import React from "react";

function Profile() {
  return (
    <Flex>
      <Sidebar />
      <Text>Profile</Text>
    </Flex>
  );
}

export default Profile;

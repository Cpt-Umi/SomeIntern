import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginSignup = () => {
  const [formType, setFormType] = useState("login");

  return (
    <Box
      as="section"
      margin={"auto"}
      bg={"white"}
      minW={["s", "450", "750"]}
      minH={"580px"}
    >
      <Flex as="div" w={"100%"} justify={"center"} align={"center"}>
        <Button
          h={"55"}
          flex={"1"}
          border={"none"}
          borderRadius={"0"}
          bg={"white"}
          onClick={() => {
            setFormType("login");
          }}
        >
          Login
        </Button>
        <Button
          h={"55px"}
          flex={"1"}
          border={"none"}
          borderRadius={"0"}
          bg={"white"}
          onClick={() => {
            setFormType("signup");
          }}
        >
          Signup
        </Button>
      </Flex>
      {formType === "login" && <LoginForm />}
      {formType === "signup" && <SignupForm />}
    </Box>
  );
};

export default LoginSignup;

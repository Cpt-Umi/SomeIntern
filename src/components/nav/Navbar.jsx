import React from "react";
import LoadingBar from "react-top-loading-bar";
import { Flex, HStack, Text, Button } from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/store";

const Navbar = () => {
  const selector = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Flex
      m={"3"}
      ml={"6"}
      mr={"6"}
      justify={"space-between"}
      bg={"ActiveBorder"}
      bgColor={"blue.800"}
      padding={"2"}
      borderRadius={"md"}
    >
      <LoadingBar
        color="#f11946"
        progress={100}
        height={3}
        transitionTime={2000}
      />
      <Sidebar />
      <HStack>
        <Text mr={"5"} fontSize={"lg"} color={"aliceblue"}>
          Hi, {selector}
        </Text>
        <Button
          onClick={() => {
            navigate("/cart");
          }}
          variant={"outline"}
          color={"white"}
        >
          Cart
        </Button>
        <Button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;

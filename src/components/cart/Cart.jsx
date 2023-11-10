import React from "react";
import { coverIdApi } from "../../api/api";
import coverImg from "../../assets/cover-placeholder.png";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Heading,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Box w={"100%"} p={"5"}>
      <Heading mb={"20px"} color={"white"}>
        WishList:
      </Heading>
      <Accordion allowToggle w={"100%"}>
        {cartItems.map((item) => {
          return (
            <AccordionItem color={"aliceblue"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <HStack>
                  <Image
                    src={
                      item?.covers
                        ? `${coverIdApi}${item.covers[0]}-M.jpg`
                        : coverImg
                    }
                  />
                  <Box>
                    <strong>Description:</strong> {item.description}
                  </Box>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Cart;

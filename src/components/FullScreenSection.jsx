import * as React from "react";
import { Container } from "@chakra-ui/react";

const FullScreenSection = ({ children, ...containerProps }) => {
  return (
    <Container minW={"100%"} minH={"100vh"} {...containerProps}>
      {children}
    </Container>
  );
};

export default FullScreenSection;

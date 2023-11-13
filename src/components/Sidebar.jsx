import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sidebarContents = [
    {
      title: "Home",
      link: "/dashboard",
    },
    {
      title: "Categories",
      link: "/categories",
    },
  ];

  return (
    <>
      <Button color={"white"} variant={"outline"} onClick={onOpen} ml={"7"}>
        Menu
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigate</DrawerHeader>

          <DrawerBody>
            {sidebarContents.map((val, key) => {
              return (
                <ChakraLink
                  as={RouterLink}
                  to={val.link}
                  borderBottom={"1px solid black"}
                  minW={"100%"}
                  minH={"14"}
                  textAlign={"center"}
                  lineHeight={"45px"}
                  color={"blue.600"}
                  p={"1.5"}
                  m={"0"}
                  _hover={{
                    background: "lightgrey",
                    color: "blue.600",
                  }}
                  id={val.title}
                  key={key}
                  display={"inline-block"}
                >
                  {val.title}
                </ChakraLink>
              );
            })}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;

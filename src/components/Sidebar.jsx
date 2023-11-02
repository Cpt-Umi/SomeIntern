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
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Reviews",
      link: "/reviews",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  return (
    <>
      <Button color={"white"} variant={"outline"} onClick={onOpen}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
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

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button> */}
            {/* <Button colorScheme="blue"></Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;

// import { Box, VStack, Link as ChakraLink } from "@chakra-ui/react";
// import React from "react";
// import { Link as RouterLink } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {}

// function Sidebar() {
//   // const navigate = useNavigate();

//   return (
//     <Box ml={"0"} minW={["100", "200", "300"]} bg={"purple.900"}>
//       <VStack p={"0"} gap={"0"}>
//         {sidebarContents.map((val, key) => {
//           return (
//             <ChakraLink
//               as={RouterLink}
//               to={val.link}
//               borderBottom={"1px solid black"}
//               minW={"100%"}
//               minH={"14"}
//               textAlign={"center"}
//               lineHeight={"45px"}
//               color={"white"}
//               p={"1.5"}
//               m={"0"}
//               _hover={{
//                 background: "blue.600",
//               }}
//               id={val.title}
//               key={key}
//             >
//               {val.title}
//             </ChakraLink>
//           );
//         })}
//       </VStack>
//     </Box>
//   );
// }

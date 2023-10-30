import React from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Image,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { coverApi } from "../api/api";
import coverImg from "../assets/cover-placeholder.png";
import { useContext } from "react";
import { BookContext } from "../context/dataContext";

const BookCard = (props) => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {props.books.map(({ title, author_name, isbn, key }) => (
        <Link to="/bookdetails" state={key} key={key}>
          <Card
            minW={[100, 150, 200]}
            minH={"500px"}
            bg={"whiteAlpha.200"}
            justify={"center"}
            // align={"center"}
          >
            <CardBody>
              <Image
                src={`${coverApi}${isbn[0]}-M.jpg`}
                alt="Cover Image"
                w={"150px"}
                h={"200px"}
                bgImg={coverImg}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                bgPos={"center"}
                borderRadius="lg"
                ml={"auto"}
                mr={"auto"}
              />
              <Divider mt={"5"} />
              <Stack mt="5" spacing="2">
                <Heading size="md" color={"white"}>
                  {title}
                </Heading>
                <Text color="black" fontSize="xl">
                  Author Name: {author_name}
                </Text>
                <Text>ISBN: {isbn[0]}</Text>
              </Stack>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default BookCard;

// {books.map(({ title, author_name, isbn }, key) => (
//   <>
//     <Heading fontSize={"md"} key={key}>
//       {title}
//     </Heading>
//     <Box w={"150px"} h={"200px"}>
//       <Image
//         src={`${coverApi}${isbn[0]}-M.jpg`}
//         alt="Cover Image"
//         w={"150px"}
//         h={"200px"}
//         bgImg={coverImg}
//         bgSize={"auto"}
//         bgRepeat={"no-repeat"}
//         bgPos={"center"}
//         // bgImage={"../assets/cover-placeholder.png"}
//       />
//     </Box>
//     {/* {covers?.map((cover) => (
//       <Box>
//         <Image src={cover} />
//       </Box>
//     ))} */}
//     <Heading fontSize={"md"}>{`Author Name: ${author_name}`}</Heading>
//     {/* Shit */}
//     <Heading fontSize={"md"}>{`ISBN: ${isbn[0]}`}</Heading>
//   </>
// ))}

/* <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card> */

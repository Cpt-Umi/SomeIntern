import React, { useState } from "react";
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
import { coverIdApi } from "../../api/api";
import coverImg from "../../assets/cover-placeholder.png";
import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";
import ReactPaginate from "react-paginate";
import "../paginate.css";

// Must be a better way to do this....
const CategoriesCard = () => {
  const { catBooks } = useContext(CategoryContext);
  const [pageNumber, setPageNumber] = useState(null);

  const booksPerPage = 8;
  const booksVisited = pageNumber * booksPerPage;
  const pageCount = Math.ceil(catBooks.length / booksPerPage);

  const displayBooks = catBooks
    .slice(booksVisited, booksVisited + booksPerPage)
    .map((book) => {
      return (
        <Link to="/bookdetails" state={book.key}>
          <Card
            minW={[100, 150, 200]}
            minH={"500px"}
            bg={"whiteAlpha.200"}
            justify={"center"}
            // align={"center"}
          >
            <CardBody>
              <Image
                src={
                  book?.cover_id
                    ? `${coverIdApi}${book.cover_id}-M.jpg`
                    : coverImg
                }
                alt="Cover Image"
                w={"150px"}
                h={"200px"}
                bgImg={coverImg}
                bgSize={"cover"}
                bgRepeat={"no-repeat"} // Fix
                bgPos={"center"}
                borderRadius="lg"
                ml={"auto"}
                mr={"auto"}
              />
              <Divider mt={"5"} />
              <Stack mt="5" spacing="2">
                <Heading size="md" color={"white"}>
                  {book.title}
                </Heading>
                <Text color="black" fontSize="xl">
                  Author Name:{" "}
                  {book.authors ? book.authors[0].name : "Anonymous"}
                </Text>
                <Text>ISBN: {book.isbn ? book.isbn : "Null"}</Text>
              </Stack>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Link>
      );
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {displayBooks}
      </SimpleGrid>
      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationBtns"
        previousLinkClassName="prevBtn"
        nextLinkClassName="nextBtn"
        activeClassName="activePagination"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default CategoriesCard;

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

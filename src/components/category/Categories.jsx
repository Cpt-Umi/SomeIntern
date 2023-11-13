import { Suspense, useEffect } from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import CategoriesCard from "./CategoriesCard";
import Loading from "../Loading";
import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";
import CatBtn from "./CatBtn";
import Navbar from "../nav/Navbar";

function Categories() {
  const { bookCategory, setDefaults } = useContext(CategoryContext);

  useEffect(() => {
    setDefaults();
  }, [bookCategory]);

  return (
    <Box
      as="section"
      w={"100%"}
      bg={"blue.700"}
      justifyContent={"center"}
      p={"2"}
    >
      <Navbar />
      {/* Async-Paginate here if needed */}
      <HStack w={"100%"} mt={"5px"} justify={"center"}>
        <CatBtn
          label="Mystery"
          url="mystery"
          active={bookCategory === "mystery" ? true : false}
        />
        <CatBtn
          label="Fiction"
          url="fiction"
          active={bookCategory === "fiction" ? true : false}
        />
        <CatBtn
          label="Non-Fiction"
          url="nonfiction"
          active={bookCategory === "nonfiction" ? true : false}
        />
        <CatBtn
          label="Love"
          url="love"
          active={bookCategory === "love" ? true : false}
        />
        <CatBtn
          label="Comedy"
          url="comedy"
          active={bookCategory === "comedy" ? true : false}
        />
        <CatBtn
          label="Horror"
          url="horror"
          active={bookCategory === "horror" ? true : false}
        />
      </HStack>
      <Heading textTransform={"capitalize"} ml={"6"} color={"aliceblue"}>
        {bookCategory}:
      </Heading>
      <Box m={"6"} justifyContent={"center"} alignItems={"center"}>
        <Suspense fallback={<Loading />}>
          {/* Fix */}
          <CategoriesCard />
        </Suspense>
      </Box>
    </Box>
  );
}

export default Categories;

/* <Box as="section" w={"100%"} display={"flex"}>
        <Box w={"50%"} ml={"auto"} mr={"auto"}>
          <AsyncPaginate
            placeholder="Search Books"
            debounceTimeout={800}
            value={catBooks}
            onChange={catHandleOnChange}
            loadOptions={catLoadOptions}
            options={catOptions}
            // defaultInputValue="Dark Tower"
          />
        </Box>
      </Box> */

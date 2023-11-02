import { Suspense, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Box, Button, HStack } from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import CategoriesCard from "./CategoriesCard";
import Loading from "../Loading";
import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";

function Categories() {
  const {
    bookCategory,
    setBookCategory,
    catBooks,
    catHandleOnChange,
    catLoadOptions,
    catOptions,
    setDefaults,
  } = useContext(CategoryContext);

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
      <Box m={"10px"}>
        <Sidebar />
      </Box>
      <Box as="section" w={"100%"} display={"flex"}>
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
      </Box>
      <HStack w={"100%"} mt={"5px"} justify={"center"}>
        <Button
          borderRadius={"sm"}
          onClick={() => {
            setBookCategory("fiction");
          }}
        >
          Fiction
        </Button>
        <Button
          borderRadius={"sm"}
          onClick={() => {
            setBookCategory("science");
          }}
        >
          Science
        </Button>
        <Button
          borderRadius={"sm"}
          onClick={() => {
            setBookCategory("history");
          }}
        >
          History
        </Button>
        <Button
          borderRadius={"sm"}
          onClick={() => {
            setBookCategory("comedy");
          }}
        >
          Comedy
        </Button>
        <Button
          borderRadius={"sm"}
          onClick={() => {
            setBookCategory("mathematics");
          }}
        >
          Mathematics
        </Button>
        {/* <p>{bookCategory}</p> */}
      </HStack>
      <Box m={"8"} justifyContent={"center"} alignItems={"center"}>
        <Suspense fallback={<Loading />}>
          {/* Fix */}
          <CategoriesCard />
        </Suspense>
      </Box>
    </Box>
  );
}

export default Categories;

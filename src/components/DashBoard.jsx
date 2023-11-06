import { AsyncPaginate } from "react-select-async-paginate";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import BookCard from "./books/BookCard";
import { useContext, useEffect } from "react";
import { BookContext } from "../context/dataContext";
import LoadingBar from "react-top-loading-bar";

function DashBoard() {
  const { books, handleOnChange, options, loadOptions, setDefaults } =
    useContext(BookContext);

  useEffect(() => {
    if (books.length === 0) {
      setDefaults();
    }
  }, []);

  return (
    <Box
      as="section"
      w={"100%"}
      bg={"blue.700"}
      justifyContent={"center"}
      p={"2"}
    >
      <LoadingBar
        color="#f11946"
        progress={100}
        height={3}
        transitionTime={2000}
      />
      <Box m={"10px"}>
        <Sidebar />
      </Box>
      <Box as="section" w={"100%"} display={"flex"}>
        <Box w={"50%"} ml={"auto"} mr={"auto"}>
          <AsyncPaginate
            placeholder="Search Books"
            debounceTimeout={800}
            value={""}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            options={options}
          />
        </Box>
      </Box>
      <Box m={"8"} justifyContent={"center"} alignItems={"center"}>
        <BookCard />
      </Box>
    </Box>
  );
}

export default DashBoard;

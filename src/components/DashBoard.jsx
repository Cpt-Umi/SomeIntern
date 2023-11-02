import { Suspense } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import BookCard from "./BookCard";
import Loading from "./Loading";
import { useContext } from "react";
import { BookContext } from "../context/dataContext";

function DashBoard() {
  const { books, handleOnChange, options, loadOptions } =
    useContext(BookContext);

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
            value={books}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            options={options}
            // defaultInputValue="Dark Tower"
          />
        </Box>
      </Box>
      <Box m={"8"} justifyContent={"center"} alignItems={"center"}>
        <Suspense fallback={<Loading />}>
          {/* Fix */}
          <BookCard />
        </Suspense>
      </Box>
    </Box>
  );
}

export default DashBoard;

// const getCover = async () => {
//   try {
//     let ISBN = search
//       .filter((books) => {
//         if (!books.isbn) return books;
//       })
//       .map((book) => book.isbn[0]);
//     const response = await axios.get(`${coverApi}${ISBN}-M.jpg`);
//     setCovers(response);
//     // console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

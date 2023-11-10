import { AsyncPaginate } from "react-select-async-paginate";
import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import BookCard from "./books/BookCard";
import { useContext, useEffect } from "react";
import { BookContext } from "../context/dataContext";
import LoadingBar from "react-top-loading-bar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/store";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const { books, handleOnChange, options, loadOptions, setDefaults } =
    useContext(BookContext);

  const selector = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <Flex m={"10px"} justify={"space-between"}>
        <Sidebar />
        <HStack>
          <Button
            onClick={() => {
              navigate("/cart");
            }}
            variant={"outline"}
            color={"white"}
          >
            Cart
          </Button>
          <Text mr={"5"} fontSize={"lg"} color={"aliceblue"}>
            Logged In as, {selector}
          </Text>
          <Button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </Button>
        </HStack>
      </Flex>
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

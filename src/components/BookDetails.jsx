import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl, coverIdApi } from "../api/api";
import { useContext, useEffect } from "react";
import coverImg from "../assets/cover-placeholder.png";
import { BookContext } from "../context/dataContext";

const BookDetails = () => {
  const { details, setDetail } = useContext(BookContext);
  // let cover = null;

  const location = useLocation();
  const id = location.state;

  const getBookDetails = async () => {
    try {
      const res = await axios.get(`${baseUrl + id}.json`);
      const result = res.data;

      // Replacing Missing Data
      // Simple set authors if present
      result.authors = result.authors
        ? result.authors[0].author.key
        : "Anonymous";

      // Check for description else replace with 'Unavailable'
      if (!!result.description) {
        // If object return value
        if (!!result.description.value) {
          result.description = result.description.value;
        }
      } else {
        // If not present
        result.description = "Unavailable";
      }

      setDetail(result);
      // getAuthor();
      // console.log("Specific Result", result);
    } catch (error) {
      console.error(error);
    }
  };

  // const getAuthor = async () => {
  //   if (details.author != "Anonymous") {
  //     try {
  //       const authorDetail = await axios.get(
  //         `${baseUrl + details.author}.json`
  //       );
  //       author = authorDetail.data.personal_name;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  useEffect(() => {
    getBookDetails();
    // getAuthor();
    // console.log(author);
  });

  // useEffect(() => {
  //   getAuthor();
  // });

  return (
    <Box as="section" w={"100%"} bg={"blue.700"} justifyContent={"center"}>
      <Box m={"10px"}>
        <Sidebar />
      </Box>
      <Box m={"8"} border={"2px"} p={"3"}>
        <Image
          ml={"5"}
          src={
            details?.covers
              ? `${coverIdApi}${details.covers[0]}-M.jpg`
              : coverImg
          }
          alt="Cover Image"
        />
        <Box ml={"5"} mt={"5"}>
          <Heading fontSize={["md", "xl", "3xl"]}>
            Title: {details.title}
          </Heading>
          <Text mt={"8"} fontSize={["s", "s", "md"]}>
            <strong>Description:</strong> {details.description}
          </Text>
          <Text>
            <strong>ID:</strong> {id}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BookDetails;

// `${coverIdApi}${details.covers}-L.jpg`;

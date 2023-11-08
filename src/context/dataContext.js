import { createContext, useState } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";

export const BookContext = createContext(null);

export const BookContextProvider = ({ children }) => {
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState([]);
  const [options, setOptions] = useState([]);
  const [details, setDetail] = useState([]);
  const [author, setAuthor] = useState("");

  const handleOnChange = () => {
    // Fix
    setBooks(
      search.filter((book) => {
        if (!!book.isbn) return book;
        else {
          return;
        }
      })
    );
  };

  const loadOptions = async (inputValue) => {
    try {
      if (inputValue.length > 0) {
        const response = await axios.get(
          `${baseUrl}/search.json?title=${inputValue}`
        );
        const result = response.data;
        setSearch(result.docs);

        const newOptions = result?.docs.map((book) => ({
          value: book.title,
          label: book.title,
        }));

        setOptions(newOptions);
        // Return to display options on search
        return { options: newOptions };
      }
      return { options: [] };
    } catch (error) {
      console.error(error);
      return { options: [] }; // Return an empty array or handle the error accordingly.
    }
  };

  const setDefaults = async () => {
    try {
      const res = await axios.get(`${baseUrl}/search.json?title=stephen+king`);
      const result = res.data.docs;
      setBooks(
        result.filter((book) => {
          if (!!book.isbn) return book;
          else {
            return;
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    search,
    setSearch,
    books,
    setBooks,
    options,
    setOptions,
    details,
    setDetail,
    author,
    setAuthor,
    handleOnChange,
    loadOptions,
    setDefaults,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

import axios from "axios";
import { createContext, useState } from "react";
import { baseUrl } from "../api/api";

export const CategoryContext = createContext(null);

export const CategoryContextProvider = ({ children }) => {
  const [bookCategory, setBookCategory] = useState("mystery");
  const [catBooks, setCatBooks] = useState([]);

  const setDefaults = async () => {
    try {
      const res = await axios.get(`${baseUrl}/subjects/${bookCategory}.json`);
      const result = res.data.works;
      setCatBooks(result);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    bookCategory,
    setBookCategory,
    catBooks,
    setCatBooks,
    setDefaults,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

// const [result, setResult] = useState([]);

// const catHandleOnChange = () => {
//   // setCatBooks(result);
// };

// const catLoadOptions = async (inputValue) => {
//   try {
//     if (inputValue.length > 0) {
//       const res = await axios.get(`${baseUrl}/subjects/${inputValue}.json`);
//       const result = res.data.works;

//       setCatBooks(result);
//       // console.log("RESULT..................", result);

//       const newOptions = result?.map((book) => ({
//         value: book.title,
//         label: book.title,
//       }));

//       console.log("newOptions..................", newOptions);
//       // console.log(search);

//       // setCatOptions(newOptions);
//       // Return to display options on search
//       setBookCategory(inputValue);
//       return { options: newOptions };
//     }
//     return { options: [] };
//   } catch (error) {
//     console.error(error);
//     return { options: [] }; // Return an empty array or handle the error accordingly.
//   }
// };

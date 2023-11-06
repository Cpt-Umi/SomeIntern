import { ChakraProvider } from "@chakra-ui/react";
import LoginSignup from "./components/loginsignup/LoginSignup";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Profile from "./components/Profile";
import FullScreenSection from "./components/FullScreenSection";
import BookDetails from "./components/books/BookDetails";
import Categories from "./components/category/Categories";

function App() {
  return (
    <ChakraProvider>
      <FullScreenSection
        backgroundColor={"#2C5282"}
        display={"flex"}
        padding={0}
        margin={0}
      >
        {/* Fix */}
        <Routes>
          <Route exact path="/" element={<LoginSignup />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/bookdetails" element={<BookDetails />} />
        </Routes>
      </FullScreenSection>
    </ChakraProvider>
  );
}

export default App;

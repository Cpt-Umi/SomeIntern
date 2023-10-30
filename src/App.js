// import './App.css';
import { ChakraProvider, Flex } from "@chakra-ui/react";
import LoginSignup from "./components/LoginSignup";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Profile from "./components/Profile";
import FullScreenSection from "./components/FullScreenSection";
import Sidebar from "./components/Sidebar";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "./components/Loading";
import BookDetails from "./components/BookDetails";

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
          <Route
            exact
            path="/dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <DashBoard />
              </Suspense>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Flex>
                <Sidebar />
                <Profile />
              </Flex>
            }
          />
          <Route exact path="/bookdetails" element={<BookDetails />} />
        </Routes>
      </FullScreenSection>
    </ChakraProvider>
  );
}

export default App;

import { ChakraProvider } from "@chakra-ui/react";
import LoginSignup from "./components/loginsignup/LoginSignup";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import FullScreenSection from "./components/FullScreenSection";
import BookDetails from "./components/books/BookDetails";
import Categories from "./components/category/Categories";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "./components/cart/Cart";
import MasterRoute from "./MasterRoute";

function App() {
  const client = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={client}>
        <Provider store={store}>
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
                element={<MasterRoute Component={DashBoard} />}
              />
              <Route
                exact
                path="/categories"
                element={<MasterRoute Component={Categories} />}
              />
              <Route
                exact
                path="/bookdetails"
                element={<MasterRoute Component={BookDetails} />}
              />
              <Route
                exact
                path="/cart"
                element={<MasterRoute Component={Cart} />}
              />
            </Routes>
          </FullScreenSection>
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;

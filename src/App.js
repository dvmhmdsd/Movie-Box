import "./App.css";
import HeaderComponent from "./components/Header";
import MovieList from "./components/MovieList/index";
import FooterComponent from "./components/Footer/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { SearchContext } from "./search-context";
import FeaturedList from "./components/featured";

const queryClient = new QueryClient();

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SearchContext.Provider value={{ searchText, setSearchText }}>
          <HeaderComponent />
        </SearchContext.Provider>
        {!searchText && <FeaturedList />}
        <MovieList searchValue={searchText} />
        <FooterComponent />
      </QueryClientProvider>
    </div>
  );
}

export default App;

import "./App.css";
import HeaderComponent from "./components/Header";
import MovieList from "./components/MovieList/index";
import FooterComponent from "./components/Footer/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <HeaderComponent />
        <MovieList />
        <FooterComponent />
      </QueryClientProvider>
    </div>
  );
}

export default App;

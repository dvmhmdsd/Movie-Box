import "./App.css";
import HeaderComponent from "./components/Header";
import MovieList from "./components/MovieList/index";
import FooterComponent from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MovieList />
      <FooterComponent />
    </div>
  );
}

export default App;

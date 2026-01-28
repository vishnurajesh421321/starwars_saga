
import './App.css'
import Header from "./components/layout/header.tsx";
import MainSection from "./components/layout/main-section.tsx";
import Movies from "./features/movies/components/movies.tsx";
import MovieDetails from "./features/movies/components/movie-details.tsx";

function App() {

  return (
    <div className="h-screen flex flex-col">
        <Header />
        <MainSection>
            <Movies/>
            <MovieDetails/>
        </MainSection>
    </div>
  )
}

export default App

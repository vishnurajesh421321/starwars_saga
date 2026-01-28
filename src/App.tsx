
import './App.css'
import Header from "./components/layout/header.tsx";
import MainSection from "./components/layout/main-section.tsx";
import Movies from "./features/movies/components/movies.tsx";
import MovieDetails from "./features/movies/components/movie-details.tsx";
import {useState} from "react";
import type {SelectItem} from "./features/type.ts";
import useDebounce from "./hooks/use-debounce.ts";
import MoviesList from "./features/movies/components/movies-list.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient()
function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sort, setSort] = useState<SelectItem | null>(null);
    const handleSearch = useDebounce(searchQuery, 1000);

    return (
    <div className="h-screen flex flex-col">
        <QueryClientProvider client={queryClient}>
            <Header setSort={setSort} setSearchQuery={setSearchQuery} />
            <MainSection>
                <Movies>
                    <MoviesList query={handleSearch} sort={sort}/>
                </Movies>
                <MovieDetails/>
            </MainSection>
        </QueryClientProvider>
    </div>
  )
}

export default App

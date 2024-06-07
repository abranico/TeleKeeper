import useMovies from "@/hooks/useMovies";
import { Search } from "lucide-react";
import { useCallback, useState } from "react";
import { Input } from "../ui/input";
import SearchMovieResult from "./SearchMovieResult";
import debounce from "just-debounce-it";
import { useNavigate } from "react-router-dom";
const SearchMovie = () => {
  const [search, setSearch] = useState("");
  const { movies, handleSearch } = useMovies();
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const debouncedGetMovies = useCallback(
    debounce((query: string) => {
      handleSearch(query);
    }, 300),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    setSearch(query);

    if (query.trim() === "") return;
    debouncedGetMovies(query);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`search/${search}`);
    setSearch("");
    debouncedGetMovies("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
        className=" w-full rounded-lg  pl-8 md:w-[200px] lg:w-[336px]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {movies.length > 0 && isFocused && <SearchMovieResult result={movies} />}
    </form>
  );
};

export default SearchMovie;

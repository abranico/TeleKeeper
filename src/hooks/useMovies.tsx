import { ISearchMovieResult } from "@/types";
import { useState } from "react";

interface IApiResult {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const mapMovies = (movie: IApiResult) => ({
  poster: movie.Poster,
  title: movie.Title,
  type: movie.Type,
  year: movie.Year,
  id: movie.imdbID,
});

const useMovies = () => {
  const [movies, setMovies] = useState<ISearchMovieResult[]>([]);

  const handleSearch = (query: string) => {
    setMovies([]);
    if (query === "") return;
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=75597ee4`)
      .then((res) => {
        if (!res.ok) throw new Error("error al llamar a la api");
        return res.json();
      })
      .then((data) => {
        const mappedMovies: ISearchMovieResult[] = data.Search.map(mapMovies);
        setMovies(mappedMovies);
      })
      .catch((e) => console.error(e));
  };
  return { movies, handleSearch };
};

export default useMovies;

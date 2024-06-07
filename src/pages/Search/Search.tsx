import { useParams } from "react-router-dom";

const Search = () => {
  const { title } = useParams();
  return <h2>Search: {title}</h2>;
};

export default Search;

import { ISearchMovieResult } from "@/types";
import { Link } from "react-router-dom";

interface IProps {
  result: ISearchMovieResult[];
}

const SearchMovieResult: React.FC<IProps> = ({ result }) => {
  return (
    <ul className="absolute w-full bg-slate-800 red-500 flex flex-col max-h-[430px] overflow-hidden transition-all ">
      {result.map((item) => (
        <li key={item.id} className="">
          <Link
            to={""}
            className="flex items-center gap-2 border-b border-slate-700 w-full p-3  hover:bg-slate-700"
          >
            <img
              src={item.poster}
              className="max-w-16 max-h-16 object-cover rounded"
            />
            <div className="flex flex-col text-ellipsis overflow-hidden">
              <span className="font-bold truncate text-base">{item.title}</span>
              <span className="text-sm text-neutral-500">
                {item.type === "series" ? "TV" : "Movie"} {item.year}
              </span>
            </div>
          </Link>
        </li>
      ))}
      <div className="bg-slate-800 absolute bottom-0 left-0 right-0 h-[70px]  flex justify-center items-center  ">
        <button
          type="submit"
          className=" bg-slate-700 px-5 py-3 rounded  text-center text-base hover:bg-sky-950 cursor-pointer "
        >
          Ver mas resultados
        </button>
      </div>
    </ul>
  );
};

export default SearchMovieResult;

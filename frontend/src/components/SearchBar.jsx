import { useForm } from "react-hook-form";
import { LuSearch } from "react-icons/lu";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SearchBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { mediaType } = useParams();

  const onSubmit = (data) => {
    switch (pathname) {
      case "/":
        navigate(`/search/multi/${encodeURIComponent(data.searchQuery)}`);
        break;
      case "/movie":
        navigate(`/search/movie/${encodeURIComponent(data.searchQuery)}`);
        break;
      case "/tv":
        navigate(`/search/tv/${encodeURIComponent(data.searchQuery)}`);
        break;
      case "/bookmarks":
        navigate(`/search/bookmarks/${encodeURIComponent(data.searchQuery)}`);
        break;
      default:
        navigate(
          `/search/${mediaType}/${encodeURIComponent(data.searchQuery)}`
        );
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-14 bg-leanBlue z-50 flex gap-3 justify-center items-center font-light text-HeadingXS lg:justify-evenly lg:text-HeadingM lg:py-5 lg:gap-0"
    >
      <LuSearch className="text-xl lg:text-3xl" />
      <input
        type="search"
        name="searchQuery"
        id="search"
        {...register("searchQuery")}
        placeholder={
          pathname.includes("movie")
            ? "Search for movies..."
            : pathname.includes("tv")
            ? "Search for TV series..."
            : pathname.includes("bookmarks")
            ? "Search for bookmarked movies and TV series..."
            : "Search for movies and TV series..."
        }
        className="w-[95%] h-fit bg-transparent caret-darkRed focus:outline-none border-b-2 border-transparent focus:border-waikawaGrey lg:w-[94%] placeholder-text-wrap"
      />
    </form>
  );
};

export default SearchBar;

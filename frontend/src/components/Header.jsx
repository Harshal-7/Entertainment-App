import { AiFillAppstore } from "react-icons/ai";
import { HiBookmark } from "react-icons/hi2";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { logoutUser } from "../service/user.service";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mediaType } = useParams();

  return (
    <div className="w-11/12 mx-auto sticky top-0 h-fit rounded-xl bg-deepBlue flex px-2 py-3 z-50 items-center justify-between lg:h-[99%] lg:w-[5%] lg:flex-col ">
      <MdMovie className="text-darkRed text-3xl md:text-4xl" />
      <div className="flex w-2/3 h-fit items-center justify-center gap-5 text-xl md:text-2xl lg:flex-col lg:h-2/3 lg:justify-start lg:gap-8 lg:text-3xl">
        <AiFillAppstore
          onClick={() => navigate("/")}
          className={
            "hover:text-white cursor-pointer " +
            (pathname === "/" || mediaType === "multi"
              ? "text-darkRed"
              : "text-waikawaGrey")
          }
        />
        <MdLocalMovies
          onClick={() => navigate("/movie")}
          className={
            "hover:text-white cursor-pointer " +
            (pathname === "/movie" || mediaType === "movie"
              ? "text-darkRed"
              : "text-waikawaGrey")
          }
        />
        <TbDeviceTvOld
          onClick={() => navigate("/tv")}
          className={
            "hover:text-white cursor-pointer " +
            (pathname === "/tv" || mediaType === "tv"
              ? "text-darkRed"
              : "text-waikawaGrey")
          }
        />
        <HiBookmark
          onClick={() => navigate("/bookmarks")}
          className={
            "hover:text-white cursor-pointer " +
            (pathname === "/bookmarks" || mediaType === "bookmarks"
              ? "text-darkRed"
              : "text-waikawaGrey")
          }
        />
      </div>
      <button
        onClick={() => {
          if (!document.cookie) {
            navigate("/signup");
            return;
          }
          logoutUser();
          navigate("/");
          setTimeout(() => {
            document.location.reload();
          }, 2000);
        }}
        className="h-fit w-fit ring-darkRed ring-1 rounded-full p-1"
      >
        <img
          className="rounded-full h-8 w-8 lg:w-10 lg:h-10"
          src="https://www.fakepersongenerator.com/Face/male/male20141085936910461.jpg"
          alt=""
        />
      </button>
    </div>
  );
};

export default Header;

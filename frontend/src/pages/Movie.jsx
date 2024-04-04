import { useEffect, useState } from "react";
import { useFetchMultiMedia } from "../service/tmdb.service";
import SingleCard from "../components/SingleCard";
import { DNA } from "react-loader-spinner";

const Movie = () => {
  const fetchMovie = useFetchMultiMedia;

  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetchMovie(1, setMediaData, "movie");
    }, 2000);
  }, [fetchMovie]);

  return (
    <>
      {mediaData ? (
        <>
          <p className="text-HeadingM font-light md:font-normal lg:font-light lg:text-HeadingL">
            Movie
          </p>
          <div className="w-full h-5/6 flex flex-wrap items-center">
            {mediaData.map((mediaInfo) => (
              <div
                key={mediaInfo.id}
                className="w-[47%] mx-1 my-5 h-1/3 md:w-[30%] md:h-1/2 md:mx-2 md:my-3 lg:w-[23%] lg:h-2/5"
              >
                <SingleCard mediaData={mediaInfo} fieldType={"movie"} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-4/5 flex items-center justify-center">
          <DNA height={100} width={100} />
        </div>
      )}
    </>
  );
};

export default Movie;

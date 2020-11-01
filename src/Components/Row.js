import React from "react";
import instance from "../axios";

const base_url =
  "https://image.tmdb.org/t/p/orginal/6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = React.useState([]);

  // A snippet of code which runs based on a specific condition/variable

  React.useEffect(() => {
    // if [], run once when teh row loads, and dont run it again
    // we will make an async call, cause we request a third party
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  console.table(movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row_poster(s) */}
        {movies.map((movie) => {
          return (
            <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
          );
        })}
      </div>
      {/* container->posters */}
    </div>
  );
}

export default Row;

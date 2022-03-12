import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    //state를 사용해서 data를 보여주는데 그 data를 API에서 받아온다.
    const getMovies = async() => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.85&sort_by=year`
        )
      ).json();
      // const response = await fetch(
      //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      // );
      // const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    }
  
  useEffect(() => {
    getMovies();
  }, []);
  
    // useEffect(() => {
    //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   })
    // }, []);
    console.log(movies);
    return(
      <section className="container">
        {loading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
}

export default Home;
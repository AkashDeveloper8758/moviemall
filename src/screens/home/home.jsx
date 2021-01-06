import React, { useState, useEffect, useContext } from "react";
import MainPoster from "./components/posterComponent";

import { Link } from "react-router-dom";
import { movieAPIS, movieType,routeConstants } from "../../defaultConstants";
import "../../index.css";
import MovieGrid from "./components/movieGrid";
import { GlobalContext } from "../../GlobalStates";

function HomeScreen() {
  // playing now *
  // latest
  // upcomming
  // top rated *
  // popular *

  const [movies, setMovies] = useState([]);
  const { moviesGlobal, setMoviesAction } = useContext(GlobalContext);
  const fetchArrayUrls = [
    movieAPIS.PLAYING_NOW_API,
    movieAPIS.POPULAR_NOW_API,
    movieAPIS.TOP_RATED_API,
    movieAPIS.UPCOMMING_MOVIE_API,
  ];
  const HeadingElement = ({ heading, url }) => {
    return (
      <div className="heading mt-8">
        <Link to={url}>{heading}</Link>
      </div>
    );
  };

  const movieTypeToApiMaping = (url) => {
    switch (url) {
      case movieAPIS.POPULAR_NOW_API:
        return movieType.POPULAR_NOW;

      case movieAPIS.UPCOMMING_MOVIE_API:
        return movieType.UPCOMMING_MOVIES;

      case movieAPIS.TOP_RATED_API:
        return movieType.TOP_RATED;

      case movieAPIS.PLAYING_NOW_API:
        return movieType.PLAYING_NOW;
      default:
        return movieType.LATEST_MOVIES;
    }
  };
  useEffect(() => {
    (async () => {
      fetchArrayUrls.forEach(async (url) => {
        const movieRes = await fetch(url);
        const movieJson = await movieRes.json();
        const moviesList = movieJson["results"];
        var movieItems = [];
        moviesList.forEach((item) => {
          var posterPath =
            "http://image.tmdb.org/t/p/w400" + item["poster_path"];
          var id = item["id"];
          var title = item["original_title"];
          var overview = item["overview"];
          var backDropPath =
            "http://image.tmdb.org/t/p/w500" + item["backdrop_path"];
          var releaseDate = item["release_date"];
          var rating = item["vote_average"];
          movieItems.push({
            id,
            title,
            overview,
            backDropPath,
            releaseDate,
            rating,
            posterPath,
          });
        });
        var movieTypeData = movieTypeToApiMaping(url);
        setMovies(movieItems);
        await setMoviesAction(movieTypeData, movieItems);
        console.log('store movies: ',moviesGlobal[movieType.PLAYING_NOW])
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesGlobal]);

  return (
    <div>
      <MainPoster
        backdropPath={movies[0] && movies[0].backDropPath}
        id={movies[0] && movies[0].id}
        posterPath={movies[0] && movies[0].posterPath}
        rating={movies[0] && movies[0].rating}
        title={movies[0] && movies[0].title}
      />
      <div className="mx-8 my-4">

        <HeadingElement heading={"Playing Now >>"} url={routeConstants.PLAYING_NOW_ROUTE} />
        <MovieGrid movies={moviesGlobal[movieType.PLAYING_NOW]} />

        
        <HeadingElement heading={"Popular >>"} url={routeConstants.POPULAR_ROUTE} />
        <MovieGrid movies={moviesGlobal[movieType.POPULAR_NOW]} />


        <HeadingElement heading={"Upcomming >>"} url={routeConstants.UPCOMMING_ROUTE} />
        <MovieGrid movies={moviesGlobal[movieType.UPCOMMING_MOVIES]} />


        <HeadingElement heading={"Top Rated >>"} url={routeConstants.TOP_RATED_ROUTE} />
        <MovieGrid movies={moviesGlobal[movieType.TOP_RATED]} />
      </div>
    </div>
  );
}

export default HomeScreen;

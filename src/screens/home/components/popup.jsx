import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { movieAPIS } from "../../../defaultConstants";
import  '../../../index.css'

function DialogPopup({ title, children, openPopup, setOnPopup, searchQuery }) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const myFetch = async () => {
      var myUrl = movieAPIS.OMDB_API + "s=" + searchQuery;
      console.log("my url : ", myUrl);
      try {
        var res = await fetch(myUrl);
        var resData = await res.json();
        console.log("final data: ", resData);
        setIsLoading(false);
        if (resData["Search"] !== undefined) setMovieList(resData["Search"]);
      } catch (error) {
        console.log("error while OMDB FETCH: ", error);
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    myFetch();
  }, [searchQuery]);

  const LoadingComponent = () => (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="loader"></div>{" "}
    </div>
  );

  const MoviePosterComponent = ({ posterImage, title, date, imdbId }) => {
    return (
        <div className="wrapper__child__dialog">
          <img
            className=" object-cover w-full h-full  rounded-lg "
            src={posterImage}
            alt="main poster"
          ></img>
          <div className="row justify-between">
            <p className="text-lg ">{title}</p>
            <p className="text-lg">{date}</p>
          </div>
        </div>
    );
  };

  const MovieComponent = () => (
    //   <div className="m-4 p-4 flex space-x-4 flex-nowrap">
      <div className="wrapper__dialog">
        {movieList.map((movieItem) => {
          return (
            <MoviePosterComponent
              key={movieItem["imdbID"]}
              posterImage={movieItem["Poster"]}
              title={movieItem["Title"]}
              date={movieItem["Year"]}
              imdbId={movieItem["imdbID"]}
            />
          );
        })}
    </div>
  );

  return (
    <Dialog
      open={openPopup}
      maxWidth={"lg"}
      onClose={() => setOnPopup(false)}
      fullWidth={true}
    >
      <DialogTitle>{"Search for : " + searchQuery}</DialogTitle>
      <DialogContent>
        {isLoading ? <LoadingComponent /> : <MovieComponent />}
      </DialogContent>
    </Dialog>
  );
}

export default DialogPopup;

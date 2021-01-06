import React from "react";
import "../../../index.css";
// import styles from "../../../styles/poster.module.css"
function MovieItem({ posterImage, title, rating, id, backDropPath,date}) {
  return (
    <div className="movieItem">
      <div className='relative'>
          <img
            className=" object-cover w-full h-full rounded-lg "
            src={posterImage}
            alt="main poster">
            </img>
            <div className='rounded-full border-black border-2 bg-white p-1 w-8  h-8 absolute left-2 bottom-2 text-center'>
              <p className="text-black text-sm font-bold ">{rating}</p>
              </div>
              </div>
          <div className="flex flex-col justify-between  px-1 py-2 overflow-hidden">
            <p className="text-white  text-lg flex-auto">{title}</p>
            <p className="text-white text-sm font-light "> {date}</p>
          </div>
        </div>
  );
}

export default MovieItem;

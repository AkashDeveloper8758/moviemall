import React,{useContext} from "react";
import MovieGrid from "../home/components/movieGrid";
import {GlobalContext} from '../../GlobalStates'

function MovieTypeScreen({movieType}) {

    const {moviesGlobal} = useContext(GlobalContext);
    const moviesSpecific = moviesGlobal[movieType];
    console.log('[type] movies are  : ',moviesGlobal)
    console.log('[type] movies are  : ',movieType)

  return (
  <div>
      <p className='text-white'> inside movie type</p>
      <MovieGrid movies={moviesSpecific} />
  </div>
    )
}

export default MovieTypeScreen;
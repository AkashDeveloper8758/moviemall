import React,{useContext} from "react";
import MovieGrid from "../home/components/movieGrid";
import {GlobalContext} from '../../GlobalStates'

function MovieTypeScreen({movieType}) {

    const {moviesGlobal} = useContext(GlobalContext);
    const moviesSpecific = moviesGlobal[movieType];
    console.log('[type] movies specific are  : ',moviesSpecific)
    console.log('[type] movies are  : ',movieType)

  return (
  <div className='pt-12'>
      <MovieGrid movies={moviesSpecific} />
  </div>
    )
}

export default MovieTypeScreen;
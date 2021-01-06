import React from "react";
import "../../../index.css";
import {Link} from 'react-router-dom'

function NavBar(params) {

  return (
    <div className="flex flex-row fixed z-50 p-4 px-8 bg-black bg-opacity-60 justify-around w-full ">
      <Link className="text-white flex-1 text-lg " to='/' > THE MOVIE SCREEN</Link>
      <Link className="navbar__item  " to ='/'> Home</Link>
      <Link className="navbar__item " to='/popular' > Popular</Link>
      <Link className="navbar__item " to='/trending'> Trending</Link>
      <Link className="navbar__item " to='/commingSoon'> Comming Soon</Link>
    </div>
  );
}
export default NavBar;

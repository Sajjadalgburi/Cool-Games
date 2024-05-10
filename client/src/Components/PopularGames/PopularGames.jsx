// Desc: Component to display popular games

// importing nessesary libraries
import { useState, useEffect } from 'react';
import getPopularGames from '../../utils/API';

// function to display popular games
const PopularGamesList = () => {
  return (
    <div className="colSystem grid gap-y-8 gap-x-3 grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row-dense">
      {/* sttyling for each unique card */}
      <div className="card m-5 w-70 bg-base-100 shadow-xl"></div>
    </div>
  );
};

// exporting the component
export default PopularGamesList;

import React from 'react';
import Movie from './movie';

const MovieList = ({movies, addReview}) => {
  return (
    <div>
        {
          movies.map((movie, index) => {
            return (
              <Movie key={index} movie={movie} addReview={addReview} />
            )
          })
        }
    </div>
  )
}
export default MovieList;
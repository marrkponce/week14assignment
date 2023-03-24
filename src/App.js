import './App.css';
import React from "react";
import Header from './components/heading'
import { data } from './components/moviedescription'
import MovieList from './components/reviewmovies';

const useState = React.useState

function App() {
  const [movies, setMovies] = useState(data);

  const addReview = (id, rating, comment) => {
    const movie = movies.find(movie => movie.id === id);
      movie.reviews.push(
        {
          user: `user$(Math.floor(Math.random() * 1000) + 100)`,
          stars: rating,
          comment: comment
        }
      );
    setMovies([...movies, movie]);
  }

  return (
    <div className="App">
      <div>
        <Header />
        <h2 className='mt-4 fs-1'>Time to rate three great films.</h2>
        <MovieList movies={movies} addReview={addReview} />
      </div>
    </div>
  );
}

export default App;
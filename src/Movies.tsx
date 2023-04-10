import { useEffect, useState } from 'react';
import { Movies } from './types/Movies';
import React from 'react';

function Movies() {
  const [movieData, setMovieData] = useState<Movies[]>([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);
  return (
    <>
      <br></br>
      <div className="text-center">
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th>Movie ID</th>
                <th>Category</th>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
                <th>Lent To</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((m) => (
                <tr>
                  <td>{m.MovieID}</td>
                  <td>{m.Category}</td>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Edited}</td>
                  <td>{m.LentTo}</td>
                  <td>{m.Notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
export default Movies;

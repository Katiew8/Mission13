import { useState } from 'react';
import data from './MovieData.json';
import React from 'react';
import styles from './My.module.css';

const mds = data.MovieDataList;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(mds);

  const addMovie = () => {
    setListOfMovies([
      ...mds,
      {
        MovieId: 383,
        Category: 'Action/Adventure',
        Title: 'Gladiator',
        Year: 2000,
        Director: 'Ridley Scott',
        Rating: 'R',
      },
    ]);
  };

  return (
    <>
      <div className="text-center">
        <br></br>
        <h1>Joel Hilton's Movie Collection</h1>
        <br></br>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {listOfMovies.map((m) => (
                <tr key={m.MovieId}>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-2"></div>
      </div>
      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;

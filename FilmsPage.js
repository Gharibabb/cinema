// frontend/src/pages/FilmsPage.js
import { Alert,Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FilmsPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('/api/films')
      .then(response => {
        setFilms(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des films</h1>
      <ul>
        {films.map(film => (
          <li key={film._id}>
            <img src={film.image} alt={film.titre} />
            <h2>{film.titre}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;

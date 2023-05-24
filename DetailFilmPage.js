// frontend/src/pages/DetailFilmPage.js
import { Alert,Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailFilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios.get(`/api/films/${id}`)
      .then(response => {
        setFilm(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!film) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{film.titre}</h1>
      <p>{film.description}</p>
      <p>Acteurs principaux : {film.acteursPrincipaux.join(', ')}</p>
      <p>Réalisateur : {film.realisateur}</p>
    </div>
  );
}

export default DetailFilmPage;

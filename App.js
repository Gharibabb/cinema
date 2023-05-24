// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccueilPage from './pages/AccueilPage';
import FilmsPage from './pages/FilmsPage';
import DetailFilmPage from './pages/DetailFilmPage';
import BarreNavigation from './components/BarreNavigation';
import PiedDePage from './components/PiedDePage';

function App() {
  return (
    <Router>
      <BarreNavigation />
      <Routes>
        <Route exact path="/" component={AccueilPage} />
        <Route exact path="/films" component={FilmsPage} />
        <Route exact path="/films/:id" component={DetailFilmPage} />
      </Routes>
      <PiedDePage />
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./Context/MovieContext";

import Header from "./Components/Header";
import MovieList from "./Components/movie-list/movie-list";
import About from "./Pages/About";
import MovieDetails from "./Pages/MovieDetails";
import Planos  from "./Pages/planos"
import Cadastro  from "./Pages/cadastro"

const App = () => {
  return (
    <MovieProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="about" element={<About />} />
        <Route path="planos" element={<Planos />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </Routes>
    </MovieProvider>
  );
};

export default App;

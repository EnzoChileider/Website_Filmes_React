import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(`http://localhost:8000/movies/${params.id}`);
      const data = await result.json();

      setMovie(data);
    };
    getMovie();
  }, []);
  const { id, Poster, Title, Year, Runtime, Nota,Sinopse } = movie;

  return (
    <div>
                <p id="titulo_filme">Filme: {Title}</p>
                    <div class="card mb-3" id="card_detalhes">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={Poster} class="img-fluid rounded-start" alt="teste"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Descrição : </h5>
                        <p class="card-text">{Sinopse}</p>
                        <h5 class="card-title">Ano : </h5>
                        <p class="card-text"><small class="text-body-secondary">{Year}</small></p>
                    </div>

                    </div>
                </div>
                </div>
      </div>
            
            
      
  );
};

export default MovieDetails;

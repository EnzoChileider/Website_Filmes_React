import { Link } from "react-router-dom";
import "./card.css";



const MovieCard = ({ movie }) => {
  const { id, Poster, Title, Year, Runtime, Nota } = movie;

  
  return (
    <div className="container text-center">
      <div className="row">
          <div className="col">
            <div className="card" id="card_component">
              
              <img src={Poster} alt="" className="card-img-top"  id="img"/>
              <div className="card-body">
                <h5 className="card-title">{Title} ({Title}) </h5>
                <p>Nota : {Nota}</p>
                <Link to={`/movies/${id}`}>
                <div className="btn btn-danger" id="detalhes">
                    Detalhes
                  </div>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>



  );
};
export default MovieCard;

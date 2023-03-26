import "./card.css";
import Comments from './../Comments/index';

const filmes = [{
  "nome": "Irmão Urso",
  "duracao": "1H25",
  "foto": "irmao_urso.jpg",
  "ano": 2003,
  "assistido": true,
  "genero": "Animação",
  "descricao": "Irmão Urso é um longa animado de fantasia lançado em 2003 produzido por Walt Disney.",
  "nota": 5
},
{
  "nome": "Modern Times",
  "duracao": "1H27",
  "foto": "chaplin.jpg",
  "ano": 1936,
  "assistido": true,
  "genero": "Comédia/Romance",
  "descricao": "Um trabalhador da linha de produção de uma fábrica é jogado na rua por causa de seu comportamento.",
  "nota": 5
},
{
  "nome": "E.T o Extraterrestre",
  "duracao": "1H50",
  "foto": "et.jpg",
  "ano": 1982,
  "assistido": false,
  "genero": "Ficção Científica",
  "descricao": "Um alienígena é deixado para trás na Terra e é salvo pelo jovem Elliot.",
  "nota": 5
}
]

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card" id="card_component">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top"  id="img"/>
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assitido
                  javisto={filme.assistido}
                />
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-danger" id="detalhes">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
            <Comments filme={filme.nome} />
          </div>
        ))}
      </div>
    </div>
  )
}
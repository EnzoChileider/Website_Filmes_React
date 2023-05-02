import React from 'react';
import Title from '.././Components/Title/index'
import "./planos.css";


const planos = [{
    "nome": "Plano Light",
    "valor" : "R$45,90",
    "foto": "plano_light.jpg",
  },
  {
  "nome": "Plano Flex",
  "valor" : "R$85,90",
  "foto": "plano_flex.jpg",
},
{
    "nome": "Plano Premium",
    "valor" : "R$100,00",
    "foto": "plano_premium.jpg",
  }

  ]


function Planos(){
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} />
            

            <div className="container text-center">
      <div className="row">
        {planos.map((plano, i) => (
          <div className="col" key={i}>
            <div className="card" id="card_component_planos">
              <img src={'/assets/images/' + plano.foto} alt={plano.nome} className="card-img-top"  id="img"/>
              <div className="card-body">
                <h5 className="card-title">{plano.nome}</h5>
                <p>Valor</p>
                <p className="card-text">{plano.valor}</p>
                
                  <div className="btn btn-warning" id="detalhes_plano">
                    Contrate já
                  </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                 
        </div>
    )   
}
 
export default Planos;
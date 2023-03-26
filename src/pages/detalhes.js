import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import "./detalhes.css";
const filmes = [{
    "nome": "Irmão Urso",
    "genero": "Animação",
    "descricao": "Irmão Urso é um longa animado de fantasia lançado em 2003 produzido por Walt Disney Animation Studios e distribuído pela Walt Disney Pictures. É a 44ª animação do Canon Animado da Disney. No filme, um garoto Inuíte chamado Kenai persegue uma ursa em busca de vingança por causa de uma batalha (começada por ele) que causou a morte de seu irmão mais velho, Sitka. Ele rastreia a ursa e a mata, mas os Espíritos, furiosos com essa morte desnecessária, transformam Kenai em um urso, como punição. Para voltar a ser humano, Kenai deve aprender a ver o mundo através de outros olhos, senti-lo através de outro coração e descobrir o verdadeiro significado da irmandade.",
    "nota": 5
},
{
    "nome": "Modern Times",
    "genero": "Comédia/Romance",
    "descricao": "Modern Times é um filme de humor negro satírico americano de 1936,escrito e dirigido por Charlie Chaplin , no qual seu icônico personagem Little Tramp luta para sobreviver no mundo moderno e industrializado. O filme é um comentário sobre o emprego desesperador e as condições financeiras que muitas pessoas enfrentaram durante a Grande Depressão - condições criadas, na visão de Chaplin, pela eficiência da industrialização moderna . O filme é estrelado por Chaplin, Paulette Goddard , Henry Bergman , Tiny Sandford e Chester Conklin. . É a última vez que Chaplin interpretou o personagem Tramp e a primeira vez que a voz de Chaplin é ouvida no cinema.",
    "nota": 5
},
{
    "nome": "Et o Extraterrestre",
    "genero": "Ficção Científica",
    "descricao": "E.T. the Extra-Terrestrial (bra/prt: E.T. O Extraterrestre) é um filme americano de ficção científica de 1982 produzido e dirigido por Steven Spielberg e escrito por Melissa Mathison. O filme apresenta efeitos especiais de Carlo Rambaldi e Dennis Muren e é estrelado por Henry Thomas, Dee Wallace, Peter Coyote, Robert MacNaughton, Drew Barrymore e Pat Welsh. A produção conta a história de Elliott, um menino que faz amizade com um extraterrestre, apelidado de 'E.T', que está preso na Terra; Elliott e seus irmãos ajudam o ET a retornar ao seu planeta natal enquanto tentam mantê-lo escondido do governo.",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />               
            <p id="titulo_filme">Filme: {filme}</p>
            {(() => {
                if (filme == 'Irmão Urso') {
                    return (
                        <div class="card mb-3" id="card_detalhes">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={"/assets/images/irmao_urso.jpg"} class="img-fluid rounded-start" alt="teste"/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Descrição : </h5>
                                <p class="card-text">{filmes[0].descricao}</p>
                                <h5 class="card-title">Gênero : </h5>
                                <p class="card-text"><small class="text-body-secondary">{filmes[0].genero}</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                } else if (filme == "Modern Times") {
                    return (
                        <div class="card mb-3" id="card_detalhes">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={"/assets/images/chaplin.jpg"} class="img-fluid rounded-start" alt="teste"/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Descrição : </h5>
                                <p class="card-text">{filmes[1].descricao}</p>
                                <h5 class="card-title">Gênero : </h5>
                                <p class="card-text"><small class="text-body-secondary">{filmes[1].genero}</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                } else {
                    return (
                        <div class="card mb-3" id="card_detalhes">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={"/assets/images/et.jpg"} class="img-fluid rounded-start" alt="teste"/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Descrição : </h5>
                                <p class="card-text">{filmes[2].descricao}</p>
                                <h5 class="card-title">Gênero : </h5>
                                <p class="card-text"><small class="text-body-secondary">{filmes[2].genero}</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default Detalhes;
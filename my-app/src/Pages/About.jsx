import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '.././Components/Title/index'
import "./about.css";
import 'bootstrap/dist/css/bootstrap.css';
function About() {
    const { name } = useParams();

    return (
        <div>  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />   


            <div class="card" id='card_sobre'>
            <img src={"/assets/images/movies.jpg"} class="card-img-top" alt="" id='img'/>
            <div class="card-body">
                <h5 class="card-title">Sobre nós</h5>
                <p class="card-text">A partir deste Website demonstramos toda a nossa admiração pela indústria cinematográfica, classificando os melhores filmes de acordo com as avaliações dos telespectadores.</p>
                <p class="card-text">Divirtam se !</p>

            </div>
            </div>
            
        </div>
    )
}


export default About;
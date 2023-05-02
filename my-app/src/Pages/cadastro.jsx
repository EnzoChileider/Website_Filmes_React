import React from 'react';
import { useParams } from 'react-router-dom';
import "./cadastro.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./about.css";
import 'bootstrap/dist/css/bootstrap.css';
function Cadastro() {
    const { name } = useParams();
    const MySwal = withReactContent(Swal);
    

    function botao(){
        document.getElementById('botao').addEventListener('click', function() {
            const nome = document.getElementById('firstname').value;
            const numero = document.getElementById('number').value;
            const endereco = document.getElementById('endereco').value;
          
            console.log(`Nome: ${nome}, Número: ${numero}, Endereço: ${endereco}`);
          });
    }


    function mudarplano () {
        MySwal.fire({
            title: <strong>Você mudou de plano!</strong>,
            icon: 'success'
          })
    }
    
    return (
        <body rel=".teste"> 
            <div class="container">
                <div class="form-image">
                    <img src="/assets/images/imgcinema.jpg"></img>
                </div>
            </div>
            <div class="form">
                <form action='#'>
                    <div class = "form-header">
                        <div class = "title">
                            <h1>Cadastre-se</h1>
                        </div>
                        
                    </div>
                    <div class ="input-group">
                        <div class ="input-box">
                            <label for="firstname">Primeiro nome</label>
                            <input id='firstname' type='text' name='firstname' placeholder='Digite seu primeiro nome' required></input>  
                        </div>  
                        <div class ="input-box">
                            <label for="number">Celular</label>
                            <input id="firstname" type="tel" name="number" placeholder="(xx) xxxxx-xxxx" required></input>  
                        </div> 
                        <br></br>
                        <div class ="input-box">
                            <label for="endereco">Endereço</label>
                            <input id='firstname' type='text' name='endereco' placeholder='Digite seu endereço' required></input>  
                        </div>                                   
                        
                    </div>

                    <div class ="input-group">
                        <div class ="input-box">
                            <label for="cartaonome">Nome no cartão</label>
                            <input id='firstname' type='text' name='cartaonome' placeholder='Digite nome do titular do cartão' required></input>  
                        </div>  
                        <div class ="input-box">
                            <label for="cartaonumber">Número do cartão</label>
                            <input id="firstname" type="text"  name="cartaonumber" placeholder="XXXX XXXX XXXX XXXX" maxlength="20" required></input>  
                        </div> 
                        <div class ="input-box">
                            <label for="password">CCV</label>
                            <input id='firstname' type='password' name='password' placeholder='CCV' required maxlength="3"></input>  
                        </div>
                    </div>

                    <div class ="gender-inputs">
                        <div class="gender-title">
                            <h6>Plano escolhido</h6>
                        </div>
                        <div class="gender-groups">
                            <div class="gender-input">
                                <input onClick={mudarplano} type="radio" id="gratis" name="gender"></input>
                                <label  for="gratis">Gratis</label>
                            </div>
                            <div class="gender-input">
                                <input onClick={mudarplano} type="radio" id="plus" name="gender"></input>
                                <label  for="plus">Plus</label>
                            </div>

                        </div>
                    </div>
                    <div class="continue-button">
                        <button id="botao" onClick={botao}><a href="#botao"></a>Assinar</button>
                    </div>
                </form>
            </div>
        </body>
        
    )
}


export default Cadastro;
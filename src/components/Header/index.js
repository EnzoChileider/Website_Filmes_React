import "./header.css";
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import React, {useEffect,useRef} from 'react';
import Typewriter from 'typewriter-effect';





export default function Header() {

    const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: 'svg',
      loop:true,
      autoplay: true,
      animationData: require('./animation.json')
    })
  },
  [])



    return (

        
        <div className="container">
            <div className='container_style' ref={container}></div>

        <Typewriter
            options={{
                strings: ['Os Melhores Filmes Aqui'],
                autoStart: true,
                loop: true,
              }}
            onInit={(typewriter) => {
            typewriter.typeString("!!!!!!!!").start();
            }}

         />   
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li> <Link className="nav-link" to='/'>Home</Link> </li>
                    <li> <Link className="nav-link" to='/planos'>Planos</Link> </li>
                    <li> <Link className="nav-link" to='/sobre/'>Sobre</Link> </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" id="button" className="btn btn-outline-danger me-2">Login</button>
                    <button type="button" id="button_2" className="btn btn-danger">Cadastrar</button>
                </div>
            </header>
        </div>
    )
}
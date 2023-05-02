import { useContext } from "react";
import MovieContext from "../Context/MovieContext";
import "./header.css";
import React, {useEffect,useRef} from 'react';
import Typewriter from 'typewriter-effect';
import lottie from 'lottie-web';

import { Link } from "react-router-dom";

const Header = () => {
  const { searchMoviesHandler } = useContext(MovieContext);



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
                    <li> <Link className="nav-link" to='/' id="nav">Home</Link> </li>
                    <li> <Link className="nav-link" to='/planos' id="nav"> Planos</Link> </li>
                    <li> <Link className="nav-link" to='/about/' id="nav">Sobre</Link> </li>
                    <li> <Link className="nav-link" to='/cadastro/' id="nav">Cadastro</Link> </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" id="button" className="btn btn-outline-danger me-2">Login</button>
                    <button type="button" id="button_2" className="btn btn-danger">Cadastrar</button>
                </div>


                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
        <div className="max-w-lg w-full lg:max-w-xs">
          <label for="search" className="sr-only">
            Search{" "}
          </label>
          <form methode="get" action="#" className="relative z-50">
            <button
              type="submit"
              id="searchsubmit"
              className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <input
              type="search"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-yellow-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search"
              onChange={searchMoviesHandler}
            />
          </form>
        </div>
      </div>



            </header>
        </div>
      

    
    
  );
};

export default Header;

import React from "react";
import HeroContainer from "./styles";
import foto from "../../assets/foto_hero.png";


function Hero() {
  return (
    <HeroContainer>
      <div className="nome_principal">
        <div>
          <h1>
            BRUNO <br />
            <span className="sobrenome">CHAVES</span>
          </h1>
        </div>

        <div className="redes_sociais">
          <a href="https://www.instagram.com/brunochaves.dev" target="_blank" rel="noopener noreferrer">
          Instagram

          </a>
          <a href="https://www.github.com/eubrunochavesdev" target="_blank" rel="noopener noreferrer">
          Github
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          Linkedin
          </a>
        </div>

        <div className="profissao">
          front-end developer <br />
          <span className="e-comercial">&</span> 
          <span className="designer">graphic designer</span>
        </div>
      </div>

      <div className="foto_principal">
        <img src={ foto } alt="" />
      </div>
    </HeroContainer>
  );
}

export default Hero;

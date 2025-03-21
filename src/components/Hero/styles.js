import styled from "styled-components";


const HeroContainer = styled.section`
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px auto;

  .nome_principal {
    text-align: right;
    width: 50%;
  }

  h1 {
    font-family: "Monument", sans-serif;
    font-weight: normal;
    font-size: 96px;
    margin: 0px;
    line-height: 1;
  }

  .sobrenome {
    font-family: "Monument", sans-serif;
    font-weight: bold;
    font-size: 128px;
    line-height: 0;
  }

  .foto_principal {
  position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: top;
  }

  .profissao {
    font-family: "Monument", sans-serif;
    font-weight: normal;
    font-size: 55px;
    position: absolute;
    bottom: 70px;
    left: 10%;
    transform: translate(-50%, 0);
    text-align: right;
    width: 100%;
  }

    .redes_sociais {
        margin: 50px 0 20px 0;
    }

  a {
    text-decoration: none;
    color: inherit;
    position: relative;
    font-size: 27px;
    font-family: "Poppins", sans-serif;
    border: 2px solid #000000;
    padding: 3px 15px;
    border-radius: 10px;
    margin: 50px 0 0 30px;
    transition: 0.3s ease;

    &:hover {
      background-color:rgb(229, 0, 0);
      color: white;
    }
    
  }

  .e-comercial {
    color: #0095e5;
    font-weight: bold;
  }

  .designer{
    font-weight: bold;
  }
`;

export default  HeroContainer;

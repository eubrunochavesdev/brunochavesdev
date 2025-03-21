import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 35px auto;
  font-family: 'Poppins', sans-serif;
  width: 80%;
  height: 90px;
  border: 3px solid #0095E5;
  border-radius: 75px;

  h1 {
    color: #0095E5;
    font-size: 2rem;
    text-align: center;
    margin-top: 20px;
  }

    nav ul {
    list-style: none; /* Remove os marcadores das listas */
    padding: 0; /* Remove o padding padrão */
    margin: 0; /* Remove a margem padrão */
    display: flex; /* Exibe os itens em linha */
    
  }

  nav ul li {
    margin-right: 20px; /* Adiciona espaço entre os itens */
    font-size: 1.5rem;
    
  }

  nav ul li a {
    text-decoration: none; /* Remove o sublinhado dos links */
    color: inherit; /* Herda a cor do texto */
    position: relative; /* Necessário para o ::after */

    &::after {
      content: '';
      position: absolute;
      width: 0px;
      height: 2px;
      display: block;
      margin-top: 1px;
      right: 0;
      background: #0095E5;
      transition: width 0.3s ease;
      -webkit-transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%; /* A linha aparece ao passar o mouse */
      left: 0;
      background: #0095E5;
    }
  
  }
`;
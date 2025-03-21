import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px auto;
  font-family: 'Poppins', sans-serif;
  width: 80%;
  height: 90px;
  border: 3px solid #0095E5;
  border-radius: 75px;
  padding: 0 20px;
  
  img {
    height: 35px;
    width: auto;

    @media (max-width: 425px) {
      height: 25px; /* Reduz a logo no mobile */
    }
  }
`;

// Botão do Menu Hamburguer
export const MenuButton = styled.button`
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #0095E5;

  @media (max-width: 425px) {
    display: block;
  }
`;

// Menu Responsivo
export const NavMenu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    
    @media (max-width: 425px) {
      flex-direction: column;
      position: absolute;
      top: 90px;
      left: 0;
      width: 100%;
      background: white;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
      transition: transform 0.3s ease-in-out;
    }
  }

  li {
    margin-right: 20px;
    font-size: 1.5rem;
    
    @media (max-width: 425px) {
      margin: 15px 0;
      text-align: center;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 1px;
      right: 0;
      background: #0095E5;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
      background: #0095E5;
    }
  }
`;

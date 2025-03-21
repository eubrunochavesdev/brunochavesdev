import { useState } from "react";
import * as S from "./styles";
import logo from "../../assets/brunodev.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S.NavContainer>
      <a href="#inicio">
        <img src={logo} alt="Logo Bruno Dev" />
      </a>

      {/* Botão do Menu Hamburguer */}
      <S.MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </S.MenuButton>

      {/* Menu Responsivo */}
      <S.NavMenu open={menuOpen}>
        <ul>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a></li>
          <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
          <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>
      </S.NavMenu>
    </S.NavContainer>
  );
}

export default Nav;

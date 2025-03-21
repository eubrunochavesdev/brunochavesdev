import * as S from './styles';
import logo from '../../assets/brunodev.svg';

function Nav() {
  return (
    <S.NavContainer>
   
   <a href="#inicio">
        <img src={logo} alt="Logo Bruno Dev" />
      </a>
   
   <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
  </S.NavContainer>
  )
  
}

export default Nav;
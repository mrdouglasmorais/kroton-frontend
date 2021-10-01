 import { Link } from 'react-router-dom';
 import { NavStyled } from './style';
import LogoKroton from '../../assets/img/logo.png'
 
 function Header(){
   return(
   <NavStyled>
     <img src={ LogoKroton } alt="Logotipo Kronton" />
     <div className="link-content">
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
     </div>
   </NavStyled>
  )
 }

 export default Header;
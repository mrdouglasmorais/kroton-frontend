 import { Link } from 'react-router-dom'
 
 function Header(){
   return(
   <nav>
     <h1>Topo</h1>
     <Link to="/">Home</Link>
     <Link to="/contato">Contato</Link>
   </nav>
  )
 }

 export default Header;
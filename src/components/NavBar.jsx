import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';



function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

      <NavLink className = {({isActive}) => (isActive ? "active" : undefined )} to="/"> BANK </NavLink>
       
    <div>
            <NavLink className = {({isActive}) => (isActive ? "active" : undefined )} to="/login"> Log in </NavLink></div>

            <div>
            <NavLink className = {({isActive}) => (isActive ? "active" : undefined )} to="/signin"> Sign in </NavLink></div>
      
            <div>
       <Navbar.Text>
            n° cuenta:
          </Navbar.Text> </div>
            <div>
       <Navbar.Text>
            Saldo:$          </Navbar.Text> </div>
      </Container>

   </Navbar>
  );
}

export default NavBar;
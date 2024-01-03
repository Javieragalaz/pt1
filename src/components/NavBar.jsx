import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';



function NavBar() {

  return (
    <Navbar expand="lg" className="navBar">
      <Container className= "contNavBar">

        <div> <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/"> Banco internacional </NavLink></div>

        <div>
          <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/login"> Ingresa </NavLink></div>

        <div>
          <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/signin"> Inscríbete</NavLink></div>



      </Container>

    </Navbar>
  );
}

export default NavBar;
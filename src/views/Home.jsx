import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

function Home() {

  return (
    <Container>
      <Card className="text-center mt-4"  >
     
        <Card.Body>
          <Card.Title>Ingresa</Card.Title>
          <Card.Text>
           Ingresa a tu cuenta para realizar transacciones y revisar tu saldo.
          </Card.Text>
          <Button variant="outline-primary" > <NavLink to="login"> Log in </NavLink></Button>
        </Card.Body>

      </Card>

      <Card className="text-center mt-4"  >
      
        <Card.Body>
          <Card.Title>Inscríbete</Card.Title>
          <Card.Text>
            Inscríbete para poder realizar acciones en tu cuenta.
          </Card.Text>
          <Button variant="outline-primary" > <NavLink to="signin"> Sign in </NavLink></Button>
        </Card.Body>

      </Card>
    </Container>
  );

}

export default Home;
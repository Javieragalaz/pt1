import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import react, {useState} from 'react';

function Login() {

// ESTADOS DEL FORMULARIO

const [email, setEmail] = useState ("");
const [password, setPassword] = useState ("");

// ESTADO PARA LOS ERRORES

const [error, setError] = useState ("false");

// FUNCIÓN ANTES DE ENVIAR EL FORMULARIO

const validateForm = (e) => {
e.preventDefault();

//VALIDACIÓN

if (email === "" || password === "") {
  setError (true);
  return;
}

//FORMULARIO ENVIADO CORRECTAMENTE:

setError (false);
email ("");
password ("");
}

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
         <Form.Control type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}
         value = {email} />
        </Col>
        
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Button variant="outline-primary" id="button-addon1">
          Button
        </Button>
    </Form>
    
  );
}

export default Login
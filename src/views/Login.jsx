import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import react, { useState } from 'react';

function Login() {

  // ESTADOS DEL FORMULARIO

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ESTADO PARA LOS ERRORES

  const [error, setError] = useState("false");

  // FUNCIÓN ANTES DE ENVIAR EL FORMULARIO

  const validateForm = (e) => {
    e.preventDefault();

    //VALIDACIÓN

    if (email === "" || password === "") {
      setError(true);
      return;
    }

    //FORMULARIO ENVIADO CORRECTAMENTE:

    setError(false);
    email("");
    password("");
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type='submit'> ingresa a tu cuenta

      </Button>
    </Form>

  );
}

export default Login;
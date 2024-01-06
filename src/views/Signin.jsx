import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';

function Signin() {

  //ESTADOS DEL FORMULARIO
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initialBalance, setInitialBalance] = useState("");

  // ESTADO PARA LOS ERRORES

  const [error, setError] = useState("false");

  // FUNCIÓN ANTES DE ENVIAR EL FORMULARIO

  const validateForm = (e) => {
    e.preventDefault();

    //VALIDACIÓN

    if (name === "" || lastname === "" || email === "" || password === "" || initialBalance === "") {
      setError(true);
      return;
    }

    //FORMULARIO ENVIADO CORRECTAMENTE:

    setError(false);
    name("");
    lastname("");
    email("");
    password("");
    initialBalance("");
  }

  return (
    <Container>
      <Form className='signIn' >

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Saldo inicial</Form.Label>
          <Form.Control type="number" onChange={(e) => setInitialBalance(e.target.value)} value={initialBalance} />
        </Form.Group>

        <Button className='button-signin' type='submit'>
          Submit
        </Button>
        
      </Form>
    </Container>

  );
}

export default Signin;
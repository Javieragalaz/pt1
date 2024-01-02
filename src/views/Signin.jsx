import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import react, { useState } from 'react';

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

    if (name === "" || lastname === "" || email === "" || password === "" || inicialBalance === "") {
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

    <Form className='signIn' onSubmit={validateForm}>
      {error ? <p>Todos los campos son obligatorios</p> : null}

      <InputGroup>

        <InputGroup.Text>Name</InputGroup.Text>
        <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} />

        <InputGroup.Text>Last name</InputGroup.Text>
        <Form.Control type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} />

        <InputGroup.Text>Email</InputGroup.Text>
        <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

        <InputGroup.Text>Password</InputGroup.Text>
        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

        <InputGroup.Text> initial balance</InputGroup.Text>
        <Form.Control type="number" onChange={(e) => setInitialBalance(e.target.value)} value={initialBalance} />

      </InputGroup>

      <Button type='submit'>
        Submit
      </Button>
    </Form>


  );
}

export default Signin;
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';
function Signin() {
  const { goToAccount } = useContext(Context);

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

        <Button className='button-signin' onClick={goToAccount}>
          Submit
        </Button>
        
      </Form>
    </Container>

  );
}

export default Signin;
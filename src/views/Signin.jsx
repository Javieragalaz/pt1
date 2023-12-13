import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Signin() {
  return (
    
    <Form>
    <InputGroup hasValidation>
      <InputGroup.Text>Name</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
      <Form.Control.Feedback type="invalid">
        Please enter your name.
      </Form.Control.Feedback>

      <InputGroup.Text>Last name</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
      <Form.Control.Feedback type="invalid">
      Please enter your last name.
      </Form.Control.Feedback>
   
    
      <InputGroup.Text>Email</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
      <Form.Control.Feedback type="invalid">
        Please enter your email.
      </Form.Control.Feedback>
   

      <InputGroup.Text>Password</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
      <Form.Control.Feedback type="invalid">
        Please enter a password.
      </Form.Control.Feedback>


      <InputGroup.Text> initial balance</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
      <Form.Control.Feedback type="invalid">
        Please enter initial balance.
      </Form.Control.Feedback>
    </InputGroup>


    </Form>

    
  );
}

export default Signin;
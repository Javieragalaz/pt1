import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Transaction() {
  return (
    <>
     

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="$"
          aria-label="Money"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        Withdrawal
        </Button>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="$"
          aria-label="Money"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Deposit
        </Button>
      </InputGroup>



  
    </>
  );
}

export default Transaction;
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

function Transactions() {

    return (
        <Container>

            <Card className="text-center mt-4"  >
                <Card.Header>Realiza un depósito</Card.Header>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                    <Button variant="outline-primary" > Depositar </Button> {/* Sumar la cantidad del input */}
                </Card.Body>

            </Card>

            <Card className="text-center mt-4"  >
                <Card.Header>Realiza un retiro</Card.Header>
                <Card.Body>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                    <Button variant="outline-primary"> Retirar</Button> {/* Restar la cantidad del input SI es mayor a 0 o al mismo número del input */}
                </Card.Body>

            </Card>

        </Container>
    )
}

export default Transactions; 
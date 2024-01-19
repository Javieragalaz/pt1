import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Number from '../components/Number';
import Transactions from '../components/Transactions';
import Balance from '../components/Balance';


function Account() {
    return (
        <Container>
            <Number />
            <Transactions />
            <Balance />
        </Container>
    );


}

export default Account;
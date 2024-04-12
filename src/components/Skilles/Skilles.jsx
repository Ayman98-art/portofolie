import { Col, Container, Row } from 'react-bootstrap';
import ItemSkilles from '../CollectionSkilles/ItemSkilles';
import ImgSkilles from '../ImgSkilles/ImgSkilles';


function Skilles() {
return (
    <>
    <div className="basicWarpping pt-120" id='Skilles'>
        <Container>
        <Row>

            <Col lg='6'>
                <ItemSkilles />
            </Col>

            <Col lg='6'>
                <ImgSkilles />
            </Col>

        </Row>
        </Container>
    </div>
    </>
)
}

export default Skilles;
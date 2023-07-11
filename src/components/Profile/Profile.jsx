import { Col, Container, Row } from 'react-bootstrap';
import DescPro from '../description-Profile/DescPro';
import DescProImg from '../description-profile-img/DescProImg';


function Profile() {
return (
    <>
        <div className="basicWarpping pt-100" id='Profile'>
            <Container>
                <Row style={{alignItems : "center"}}>
                    <Col lg={6} md={6} sm={12}>
                        <DescPro />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <DescProImg />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
)
}

export default Profile;
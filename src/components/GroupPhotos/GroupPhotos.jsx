import { Col, Row } from 'react-bootstrap';

import HTML from '../../assets/icons-of-skilles/HTML5_logo_and_wordmark.svg'
import Css from '../../assets/icons-of-skilles/css.svg';
import JS from '../../assets/icons-of-skilles/javascript.svg';
import Boostrap from '../../assets/icons-of-skilles/bootstrap.svg';
import Material from '../../assets/icons-of-skilles/Material-Ui.svg';
import Framwork from '../../assets/icons-of-skilles/react.svg';
import GitHub from '../../assets/icons-of-skilles/GitHub-Logo.png';
import Git from '../../assets/icons-of-skilles/git.svg';

import './GroupPhotos.css';

function GroupPhotos() {
return (
<>
    <div className='GroupPhotos container'>
<Row>

    <Col lg='4' md='4' sm='6'>
        <div className='skillesItems'>
        <img src={HTML} alt='HTML'/>
        </div>
    </Col>

    <Col lg='4' md='4' sm='6'>
        <div className='skillesItems'>
        <img src={Css} alt='Css'/>
        </div>
    </Col>

    <Col lg='4' md='4' sm='6'>
        <div className='skillesItems'>
        <img src={JS} alt='Javascript'/>
        </div>
    </Col>

    <Col lg='4' md='4' sm='6'>
        <div className='skillesItems'>
        <img src={Boostrap} alt='Boostrap'/>
        </div>
    </Col>

    <Col lg='4' md='4' sm='6'>
        <div className='skillesItems'>
        <img src={Material} alt='Material UI'/>
        </div>
    </Col>

    <Col lg='4' md='4' sm='6'>
        <div className='skillesItems'>
        <img src={Framwork} alt='React'/>
        </div>
    </Col>

    <Col lg='4' md='4' sm='6'>
        <div className='skillesItems'>
        <img src={GitHub} alt='Git'/>
        </div>
    </Col>

    <Col lg='4' md='4' sm='6'>
        <div className='skillesItems'>
        <img src={Git} alt='Git'/>
        </div>
    </Col>

</Row>
    </div>
</>
)
}

export default GroupPhotos;


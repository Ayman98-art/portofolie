import { Container, Nav } from 'react-bootstrap';
import ScrollUp from '../ScrollUp/ScrollUp';

import facebook from "../../assets/icons-of-skilles/facebook.png";
import whats_up from '../../assets/icons-of-skilles/whatsapp.png';
import linkedin from '../../assets/icons-of-skilles/linkedin.png';
import Github from '../../assets/icons-of-skilles/github.png';

import './Contact.css'

function Contact() {
return (
    <>
    <div className="basicWarpping pt-300" id='Contact'>

        <Container>

        <div className='ContactDesc'>
        <h2>
            Contact
        </h2>
        <article>
            <p>
            Feel free to reach out if you want a to build something together, <br /> 
            have a question, or just want to connect.
            </p>
        </article>
        </div>

        <div className='mt-5'>
            <Nav.Link href='mailto:ayman.goud99@gmail.com' 
            className='mail_Link'>ayman.goud99@gmail.com</Nav.Link>
        </div>

        <div className='mt-3 pb-70 d-flex w-25'>
            <Nav.Link 
                target='_blank'
                href='https://github.com/Ayman98-art' 
                className='socialLink'>
                    <div className='img-socail'>
                    <img src={Github} alt='Github'/>
                    </div>
            </Nav.Link>

            <Nav.Link 
            target='_blank'
            href='https://www.linkedin.com/in/ayman-gouda-8131a01a6/' 
            className='socialLink'>
            <div className='img-socail'>
                <img src={linkedin} alt='Linked In'/>
            </div> 
            </Nav.Link>

            <Nav.Link 
            target='_blank'
            href='https://www.facebook.com/ayman.goud98' 
            className='socialLink'>
                <div className='img-socail'>
                <img src={facebook} alt='Facebook'/>
                </div>
            </Nav.Link>

            <Nav.Link 
            target='_blank'
            href='https://wa.me/201064743764?text=Ayman%20is%20ready%20now...'
            className='socialLink'>
                <div className='img-socail'>
                <img src={whats_up} alt='Whats up'/>
                </div>
            </Nav.Link>

        </div>

        </Container>

        <div className='footer text-center '>
            <h6>Made With 💚 By Alien</h6>
        </div>

        <ScrollUp />
    </div>
    </>
)
}

export default Contact;
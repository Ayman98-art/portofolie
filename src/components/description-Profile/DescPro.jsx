import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './DescPro.css';

function DescPro() {
return (
    <>
        <div className='DescPro'>
            <h1>
            <span>Hello,</span>
            My name is Ayman.
            </h1>

            <article>
                <p>
                A Frontend focused Web Developer 
                building the Frontend of Websites 
                that leads to the success of the Website .
                </p>
                <p>
                I enjoy creating simple but effective solutions 
                to improve application performance, ease of maintenance and UX .
                </p>
            </article>

            <div className='btn-contact'>
            <Link
            spy={true}
            smooth={true} 
            offset={50} 
            duration={300}
            className='nav-link' 
            to="Contact"
            >
            <Button 
            variant='secondary'
            size="lg">
                Contact Me
            </Button>
            </Link>
            </div>
        </div>
    </>
)
}

export default DescPro;
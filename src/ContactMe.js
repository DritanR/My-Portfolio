import'./ContactMe.css'
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

const ContactMe = () => {
    const CurrentYear = new Date().getFullYear() 

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div className="contact-me" id='contacts'>
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>
            <Fade bottom >
            <p className='small-contact-text'>Get In Touch</p>
            <h2 className='big-contact-text'>Contact Me</h2>
            </Fade>

            <Fade bottom >
            <section className='contact-section'>
                <p className='email-contact hover'>
                    <FontAwesomeIcon className='icons-contactme' icon={faEnvelope} />
                    dritanrexhepi04@gmail.com
                </p>
                <a href='https://www.linkedin.com/in/dritan-rexhepi/' className='linkedin-contact hover'>
                <FontAwesomeIcon className='icons-contactme' icon={faLinkedin} />
                    Linkedin
                </a>
            </section>
            </Fade>

            <Fade bottom>
            <ul className='pages-elements'>
            <li className="contact-li gray" onClick={() => scrollToSection('about')}>About</li>
            <li className="contact-li gray" onClick={() => scrollToSection('experience')}>Experience</li>
            <li className="contact-li gray" onClick={() => scrollToSection('projects')}>Projects</li>
            <li className="contact-li gray" onClick={() => scrollToSection('contacts')}>Contacts</li>
            </ul>

            <p className='end'>Copyright &copy; {CurrentYear} Dritan Rexhepi. All rights reserved.</p>
            </Fade>
        </div>
    );
}
 
export default ContactMe;
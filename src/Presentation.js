import Me from './Me.jpg'
import './Presentation.css'
import 'typeface-poppins';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';

const Presentation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <div className="presentation">
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>

        <Fade bottom>
        <img className='image-presentation' src={Me} alt="My Image" />
        </Fade>

        <Fade bottom>
            <section className='text'>
                <p className='t1'>Hi, I'm</p>
                <Typed
   className="t2"
   strings={['Dritan Rexhepi']}
   typeSpeed={80}
   backSpeed={50}
   startDelay={500} // Delay before starting to type (in milliseconds)
   backDelay={6000} // Delay after deleting before typing again (in milliseconds)
   loop
                />
                <p className='t3'>Frontend Developer</p>

                <div className="button-container">
                    <button className="download-cv hover"><a href=''>Download CV</a></button>
                    <button className="contact-info hover" onClick={() => scrollToSection('contacts')}>Contact Info</button>
                </div>

                <div className="a-container">
                <a href='https://www.linkedin.com/in/dritan-rexhepi/'><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon hover" /></a>
                <a href='https://github.com/DritanR'><FontAwesomeIcon icon={faGithub} className="github-icon hover" /></a>
                </div>
            </section>
            </Fade>
            </div>
    );
}
 
export default Presentation;
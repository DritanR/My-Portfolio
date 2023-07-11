import './AboutMe.css'
import QuestionMark from './question-mark.jpg'
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <div id='about' className="about-me">
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Fade bottom>
      <p className='learn-text'>Learn Some More</p>
      <h2 className='aboutme-title'>About Me</h2>

      <section className='hole-content'>
        <img src={QuestionMark} className="aboutme-image" />
        <section className='right-content'>
          <section className='borders'>
            <section className='experience'>
            <FontAwesomeIcon className='icon' icon={faMedal} />
              <h2 className='experience-title'>Experience</h2>
              <span className='experience-time'>2+ years</span>
              <p className='experience-type'>Frontend Development</p>
            </section>
            <section className='education'>
            <FontAwesomeIcon className='icon' icon={faUsers} />
              <h2 className='education-title'>Education</h2>
              <p className='education-degree'>SHMK Drita Degree</p>
              <p className='education-type'>-</p>
            </section>
          </section>
          <p className='aboutme-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eveniet optio quaerat pariatur consequuntur facilis est nostrum! Rem iste commodi maiores facilis, voluptatum doloribus dolorum? Cupiditate laboriosam at molestiae labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dignissimos quibusdam quia aspernatur, laboriosam esse magni quas omnis. Amet velit tenetur iste debitis qui voluptas assumenda quis doloribus autem ab!</p>
        </section>
      </section>
      <FontAwesomeIcon icon={faArrowDown} className='arrow'/>
      </Fade>
    </div>
  );
}

export default AboutMe;

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
              <span className='experience-time'>Freelancer</span>
              <p className='experience-type'>Full Stack Software Engineer</p>
            </section>
            <section className='education'>
            <FontAwesomeIcon className='icon' icon={faUsers} />
              <h2 className='education-title'>Education</h2>
              <p className='education-degree'>SHMK Drita Degree</p>
              <p className='education-type'>-</p>
            </section>
          </section>
          <p className='aboutme-text'>Hi there! I'm a Full Stack Software Engineer with lots of experience in building cool stuff for different clients. I love creating new solutions and solving challenges with technology.

Throughout my career, I've worked on various projects for many people, and that has helped me learn a lot. I'm good at both front-end and back-end development, which means I can make things look nice and work smoothly.

Coding is not just a job for me; it's something I really enjoy. I spend at least four hours every day practicing and learning new things about coding. It's like a puzzle that I can't stop solving!

Being disciplined is crucial for me. Whether it's finishing tasks on time or keeping fit, I always try my best. I also love sports and staying active, which helps me think clearly and stay focused.

My main goal as a software engineer is to make things that people love to use. I want to create amazing experiences that leave a lasting impression. If you need someone who is enthusiastic, hardworking, and knows their stuff, I'd be excited to work with you. Let's team up and build something great together!</p>
        </section>
      </section>
      <FontAwesomeIcon icon={faArrowDown} className='arrow'/>
      </Fade>
    </div>
  );
}

export default AboutMe;

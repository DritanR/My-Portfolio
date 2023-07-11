import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const Experience = () => {
    return (
        <div className="the-experience" id='experience'>
                  <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>

            <Fade bottom>
            <p className='check'>Check out My</p>
            <h2 className='ex'>Experience</h2>
            </Fade>

        <Fade bottom>
        <div className='the-borders'>
            <section className='border border1'>
            <h2 className='experience-type'>Frontend Development</h2>

                <div className='flex-items'>
                <ul className='flex-onepart1'>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />
                HTML
                </span>
                <span className='level'>Experienced</span>
                </div>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />    
                CSS</span>
                <span className='level'>Experienced</span>
                </div>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />
                JavaScript</span>
                <span className='level'>Experienced</span>
                </div>
                </ul>
                <ul className='flex-onepart2'>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />
                React</span>
                <span className='level'>Experienced</span>
                </div>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />    
                NextJs</span>
                <span className='level'>Intermediate</span>
                </div>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />
                TypeScript</span>
                <span className='level'>Basic</span>
                </div>
                </ul>
                </div>
            </section>

            <section className='border border2'>
            <h2 className='experience-type'>Backend Development</h2>

                <div className='flex-items'>
                <ul className='flex-onepart1'>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />    
                Node.js</span>
                <span className='level'>Experienced</span>
                </div>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />
                Express.js</span>
                <span className='level'>Experienced</span>
                </div>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />    
                MongoDB</span>
                <span className='level'>Intermediate</span>
                </div>
                </ul>

                <ul className='flex-onepart2'>
                <div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />
                Firebase</span>
                <span className='level'>Basic</span>
                </div>
                {/*<div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />
                HTML</span>
                <span className='level'>Experienced</span>
    </div>*/}
                {/*<div className='flex-texts'>
                <span className='language'>
                <FontAwesomeIcon icon={faCheckCircle} className='verification-icon' />    
                HTML</span>
                <span className='level'>Experienced</span>
    </div>*/}
                </ul>
                </div>
            </section>
            </div>
            <FontAwesomeIcon icon={faArrowDown} className='arrow'/>
            </Fade>
        </div>
    );
}
 
export default Experience;
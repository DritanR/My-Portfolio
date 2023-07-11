import './Projects.css'
import { Helmet } from 'react-helmet';
import LiveWeatherImg from './LiveWeatherImg.png';
import AdviceGeneratorImg from './AdviceGeneratorImg.png'
import Project3Img from './Project3.png'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

const Border = (props) => {

    return (
        <div className='the-project'>
            <img src= {props.projectImg} className='project-image' alt='ProjectImage'></img>
            <h2 className='project-name'>{props.projectName}</h2>
            <section className='project-buttons'>
                <a href={props.projectGithub}><button className='project-button-1 hover'>GitHub</button></a>
                <a href={props.projectURL}><button className='project-button-2 hover'>Live Demo</button></a>
            </section>
        </div>
    );
}

const Projects = () => {
    return (
        <div className="projects" id="projects">
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>
        <Fade bottom>
        <p className='small-text'>Here Are Some Of</p>
        <h2 className='title-text'>My Projects</h2>
        </Fade>
        <Fade bottom>
        <div className='flex-content'>
        <Border projectName = 'Live Weather' projectImg = {LiveWeatherImg} projectURL = 'https://bejewelled-salamander-7a09fc.netlify.app' projectGithub = 'https://github.com/DritanR/LiveWeather'/>
        <Border projectName = 'Advice Generator' projectImg = {AdviceGeneratorImg} projectURL = 'https://storied-paprenjak-4049cb.netlify.app' projectGithub = 'https://github.com/DritanR/AdviceGenerator'/>
        <Border projectName= 'Gaming Paradise' projectImg = {Project3Img} projectGithub = 'https://github.com/DritanR/GamingParadise'/>
        </div>
        </Fade>
        <Fade bottom>
        <FontAwesomeIcon icon={faArrowDown} className='arrow'/>
        </Fade>
        </div>
    );
}
 
export default Projects;
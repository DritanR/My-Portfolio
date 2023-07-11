import './Navbar.css'
import '@fontsource/cinzel';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {   
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };

      const [showMenu, setShowMenu] = useState(false)

      function toggleMenu () {
        setShowMenu(!showMenu)
      }

    return (
        <div className="Navbar">

    <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>

            <Fade bottom>
            <p className='portfolio-name gray'>Dritan Rexhepi</p>
            </Fade>

            <Fade bottom>
            <ul className='navbar-elements'>
            <li className="f gray" onClick={() => scrollToSection('about')}>About</li>
            <li className="f gray" onClick={() => scrollToSection('experience')}>Experience</li>
            <li className="f gray" onClick={() => scrollToSection('projects')}>Projects</li>
            <li className="f gray" onClick={() => scrollToSection('contacts')}>Contacts</li>
            </ul>
            </Fade>

            <div class="menu-items">
    <div class="flex-these">
      <button class="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <p class="portfolio-name portfolio-name-menu">Dritan Rexhepi</p>
    </div>
              {showMenu && (
                            <ul className='navbar-elements-menu'>
                            <li className="f gray" onClick={() => scrollToSection('about')}>About</li>
                            <li className="f gray" onClick={() => scrollToSection('experience')}>Experience</li>
                            <li className="f gray" onClick={() => scrollToSection('projects')}>Projects</li>
                            <li className="f gray" onClick={() => scrollToSection('contacts')}>Contacts</li>
                            </ul>
              )}
            </div>
        </div>
    );
}
 
export default Navbar;
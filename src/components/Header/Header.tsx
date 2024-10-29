import React from 'react';
import '../../style/Header.css';
import profilePic from '../../assets/img/photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faYoutube, faFonticons, faBlogger, faWordpress, faMicroblog} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile">
          <img src={profilePic} alt='Emily Herrera' className="profile-pic" />
          <div className="profile-info">
            <h1>Emily Herrera</h1>
            <p className="availability">I'll be available in May.</p>
          </div>
        </div>
        <div className="about">
          <h2>About Me:</h2>
          <p className="role">{'{Programmer}} @ 🚀 Mimika Ackerman'}</p>
          <div className="badges">
            <span>🌸Traveler</span>
            <span>mobile application developer</span>
            <span>big data and artificial intelligence</span>
          </div>
          <p className="description">
            I am a highly creative person. In my free time, I enjoy art, traveling, road trips, and taking 
            care of my plants while listening to a good jazz record. I am also passionate about playing social simulation, 
            life simulation, and shooter video games. I love creating solutions that help people and contributing my knowledge 
            in systems and programming, along with my ongoing learning in mobile application development.
          </p>
        </div>
      </div>
      <div className="social-media">
        <a href="https://mimikaackerman.blogspot.com/?zx=ce68c461cdc9c4b7" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faBlogger} />
        </a>
        <a href="https://pixelmh.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWordpress} />
        </a>
        <a href="https://mikaideas.notion.site/Explorando-el-Universo-Tecnol-gico-Sistemas-Devops-Inteligencia-artificial-Programaci-n-y-Big-D-367d635a621e42a8aa2c6ba08927cac5" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMicroblog} />
        </a>
        <a href="https://www.linkedin.com/in/emilyehg/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        
      </div>
    </header>
  );
};

export default Header;

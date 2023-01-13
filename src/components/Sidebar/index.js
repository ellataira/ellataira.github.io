import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#353935" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#353935" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#353935" />
            </NavLink>
        </nav>  
        <ul>
           <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ellataira'>
                    <FontAwesomeIcon icon={faLinkedin} color="#353935" />
                </a>
            </li> 
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/ellataira'>
                    <FontAwesomeIcon icon={faGithub} color="#353935" />
                </a>
            </li> 
        </ul>
    </div>
    )

export default SideBar 
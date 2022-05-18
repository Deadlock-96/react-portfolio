import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Ake from '../../assets/images/AKE - Gradient.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className = "nav-bar" >
            <Link className = "logo" to = "/">
                <img src={Ake} alt = 'logo' />
            </Link>
                <h3>Akshay Kumar Elare</h3>
            <nav>

                <NavLink exact = "true" activeclassname = "active" to = "/">
                    <fontAwesomeIcon icon = { faHome } color = "#4d4d4e" />
                </NavLink>

                <NavLink exact = "true" activeclassname = "active" className = "about-link" to = "/about">
                    <fontAwesomeIcon icon = { faUser } color="#4d4d4e" />
                </NavLink>

                <NavLink exact = "true" activeclassname="active" className = "contact-link" to="/contact">
                    <fontAwesomeIcon icon = { faEnvelope } color = "#4d4d4e" />
                </NavLink>

            </nav>
        </div>
    )
}

export default Sidebar
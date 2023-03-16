// import 'layout/header';
import logoAdalab from "../images/logo-adalab.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'; 

const element = <FontAwesomeIcon icon={faLaptopCode} />;

function Header () {
    return  (
      <header className='header'>
        <div className='icon'>
        <Link to="/" className='header__icon'>
          {element} 
        </Link>
        <p className='text'>Proyectos Molones</p>
        </div>
        <img className='logo-adalab' src={logoAdalab} />
      </header>
    );
};

export default Header;

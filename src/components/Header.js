// import 'layout/header';
import logoAdalab from "../images/logo-adalab.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "../styles/layout/Header.scss";

const element = <FontAwesomeIcon icon={faLaptopCode} />;

function Header() {
  return (
    <header className='header'>
      <div className='icon'>
        <a href='#' className='header__icon'>
          {element}
        </a>
        <p className='text'>Proyectos Molones</p>
      </div>
      <img className='logo-adalab' src={logoAdalab} />
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="JeFlix Logo"/>
        </Link>
        {/*'as' serve para dizer como a tag irá se comportar, nesse caso um <button> se comportará como um <a>*/}
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo Vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu; // exportando componente
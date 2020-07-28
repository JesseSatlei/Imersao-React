import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <a href="#">
          <img className="Logo" src={Logo} alt="JeFlix Logo"/>
        </a>
        {/*'as' serve para dizer como a tag irá se comportar, nesse caso um <button> se comportará como um <a>*/}
        <Button as="a" className="ButtonLink" href="/">
          Novo Vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu; // exportando componente
import React from 'react';

function ButtonLink(props) {
  //props => {className="Nome da Classe Css", href: "Link para onde será redirecionado"}
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
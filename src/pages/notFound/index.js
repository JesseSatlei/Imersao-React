import React from 'react';
import PageDefault from '../../components/PageDefault';
import {NotFoundBase} from './style';

function NotFound() {
  return (
    <PageDefault>
      <NotFoundBase>
        <h2>
          Sorry :( Página não encontrada :/
        </h2>
        <div>
          Tente voltar a home do site clicando sobre a logo :)
        </div>
      </NotFoundBase>
    </PageDefault>
  );
}

export default NotFound;
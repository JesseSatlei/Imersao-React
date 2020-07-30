import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  // Está sendo desistruturado o objeto colocando o [] antes do =, se trabalha com três valores abaixo, nome, a função que altera o nome e o valor padrão.
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoEvento) {
    //const { getAttribute, value } = infoEvento.target;
    setValue(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastrar Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais); //utilizado para toda vez que cadastrar uma categoria, limpar os campos
      }}>
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição: "
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />
          </label>
        </div> */}
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div> */}
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div> */}
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
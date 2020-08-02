import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;
function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const resServer = await res.json();
        return resServer;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (res) => {
      if (res.ok) {
        const resServer = await res.json();
        return resServer;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};

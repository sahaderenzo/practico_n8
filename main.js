
import './style.css';
import { handleGetProductsToStore } from './src/views/store';
import { renderCategories } from './src/services/categories';
import { openModel } from './src/views/modal';
import { handleSearchProductByName } from './src/services/search';



//APLICACION
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}

handleGetProductsToStore();
renderCategories();

const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click', () => {
    openModel();
});


const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
});

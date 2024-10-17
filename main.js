import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';

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

/*PRODUCTOS*/
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click', () => {
    openModel();
});


/*POPUP*/
const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener('click', () => {
    handleButtonCancel();
});

const handleButtonCancel = () => {
    closeModel();
}

//Funciones para abrir y cerrar model
export const openModel = () => {
    const model = document.getElementById("modalPopUP");
    model.style.display = "flex";

    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
    }

}

export const closeModel = () => {
    const model = document.getElementById("modalPopUP");
    model.style.display = "none";
    setProductoActivo(null);
    resetModel();
}

const resetModel = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");

    nombre.value = "";
    imagen.value = "";
    precio = 0;
    categories = "Seleccione una categoria";
}

/*Guardar o modificar elementos*/
const acceptButton = document.getElementById("acceptButton");

acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categories = document.getElementById("categoria").value;

    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
    }



    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModel();
};
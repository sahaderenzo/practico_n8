import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';

//APLICACION
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
const openModel = () => {
    const model = document.getElementById("modalPopUP");
    model.style.display = "flex";
}

const closeModel = () => {
    const model = document.getElementById("modalPopUP");
    model.style.display = "none";
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

    let object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categories,
    };

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModel();
};
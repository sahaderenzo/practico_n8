/*POPUP*/

import { productoActivo, setProductoActivo } from "../../main";
import { handleSaveOrModifyElements } from "../services/products";


const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});

const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener('click', () => {
    closeModel();
});


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
    precio.value = 0;
    categories.value = "Seleccione una categoria";
}
// ======================= PRODUCTOS

import { setInLocalStorage } from "../persistence/localStorage";
import { closeModel } from "../views/modal";
import { handleGetProductsToStore } from "../views/store";
import { productoActivo } from "../../main";


export const handleSaveOrModifyElements = () => {
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
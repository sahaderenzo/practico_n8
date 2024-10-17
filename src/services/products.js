// ======================= PRODUCTOS

import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModel } from "../views/modal";
import { handleGetProductsToStore } from "../views/store";
import { productoActivo } from "../../main";
import Swal from "sweetalert2";


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

    Swal.fire({
        title: "Listo!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });


    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModel();
};

export const handleDeleteProduct = () => {

    Swal.fire({
        title: "Seguro que lo deseas borrar ?",
        text: "No es una acción reversible",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newproducts = handleGetProductLocalStorage();
            handleGetProductsToStore(newproducts);
            closeModel();
            Swal.fire({
                title: "Eliminado!",
                text: "El producto fue eliminado correctamente",
                icon: "success"
            });
        } else {
            closeModel();
        }
    });

}
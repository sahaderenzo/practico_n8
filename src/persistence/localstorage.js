//LOCALSTORAGE

//Traer productos
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
}


//Guardar productos
export const setInLocalStorage = (productIn) => {
    let prodcutInLocal = handleGetProductLocalStorage();

    const existingIndex = prodcutInLocal.findIndex((prodcutInLocal) =>
        prodcutInLocal.id !== productIn
    );

    if (existingIndex !== -1) {
        prodcutInLocal[existingIndex] = productIn;
    } else {
        prodcutInLocal.push(productIn);
    }

    localStorage.setItem("products", JSON.parse(prodcutInLocal));

}
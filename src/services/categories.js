//render de la vista categorias

export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id = "Todo">Todos los productos</li>
    <li id = "Hamburguesas">Hamburguesas</li>
    <li id = "Papas">Papas</li>
    <li id = "Gaseosas">Gaseosas</li>
    <li id = "mayorPrecio">Mayor Precio</li>
    <li id = "menorPrecio">Menor Precio</li>
    `;
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((lieElement) => {
        lieElement.addEventListener('click', () => {
            handleClick(lieElement);
        })
    });

    const handleClick = (elemento) => {
        liElements.forEach((el) => {
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive");
            } else {
                if (elemento === el) {
                    el.classList.add("liActive");
                }
            }
        });
    };
}
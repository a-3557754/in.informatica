document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor");
    for (let i = 0; i < 9; i++) {
        const celda = document.createElement("div");
        celda.textContent = i + 1;
        celda.style.border = "1px solid #000";
        celda.style.padding = "10px";
        contenedor.appendChild(celda);
    }
});
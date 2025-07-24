const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");
const carDetails = document.getElementById("carDetails");

function openFulImg(reference, name = '', price = '') {
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
    carDetails.innerHTML = `<h2>${name}</h2><p>Precio: ${price}</p>`;
}

function closeImg() {
    fulImgBox.style.display = "none";
    carDetails.innerHTML = '';
}

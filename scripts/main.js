//clase 'active' a la imagen cuando el usuario hace clic en ella. Esto puede ser útil para agregar más estilos o efectos a la imagen seleccionada.
const images = document.querySelectorAll('.gallery img');

function handleClick() {
	this.classList.toggle('active');
}

images.forEach(image => image.addEventListener('click', handleClick));

function f1(){
    console.log("Funcion cargada al inicio");
}
 
window.onload = f1;
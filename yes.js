let square = document.querySelector('.square');



for (i=0;i<256;i++) {
    let divs = document.createElement('div');
    divs.className = "gridDivs"
    square.appendChild(divs);
}

document.querySelector('.generador').addEventListener('click', () => {
    let cuadricula = prompt('¿De cuanto la cuadricula?');
    if (cuadricula < 300) {
        let elementos = document.querySelectorAll('.gridDivs');
        elementos.forEach(element => {
            element.remove();
        });
        for (i=0;i<cuadricula;i++) {
            let divs = document.createElement('div');
            divs.className = "gridDivs"
            divs.style.background = `rgb(23, 32, 12);`
            square.appendChild(divs);
        }
    } else {
        alert('La cuadricula es muy grande');
    }
})



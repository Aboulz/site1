const btnPlus = document.querySelector('.plus');
console.log(btnPlus);
const colTransport = document.querySelector('.conteneur-transport');

btnPlus.addEventListener('click', ouvreferme)

function ouvreferme(){
    colTransport.classList.toggle('invisible');
}
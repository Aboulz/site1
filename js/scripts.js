const btnPlus = document.querySelectorbtnPlus('.plus');
const colTransport = document.querySelector('.col-transports');

btnPlus.addEventListiener('click', ouvreferme)

function ouvreferme(){
    colTransport.classList.toggle('invsible');
}
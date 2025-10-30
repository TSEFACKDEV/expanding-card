//  selection de la carte 
let cards = document.querySelectorAll('.card');


// ajouter un ecouter d'evenement au click 
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active')
    })
} )
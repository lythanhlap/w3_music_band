const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal')

function showBuyTickets(){
    modal.classList.add('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}

const btnCloseModal = document.querySelector('.js-modal-close-btn')

function closeModal(){
    modal.classList.remove('open')
}
btnCloseModal.addEventListener('click', closeModal)
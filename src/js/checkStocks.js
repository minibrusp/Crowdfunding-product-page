export default function checkStocksAvailability() {
   let promotionalStock = document.querySelectorAll('.promotional__rewards .rewards__cards p strong');
   promotionalStock.forEach(stock => {
      if(stock.innerHTML === '0') {
         let parentCard = stock.parentElement.parentElement;
         let button = parentCard.querySelector('.rewards__cards button');
         parentCard.classList.add('outofstock');
         button.disabled = true;
         button.innerHTML = 'Out of stock';
         document.querySelector(`#modal__${parentCard.classList[1]}`).classList.add('outofstock');
      }
   });
}

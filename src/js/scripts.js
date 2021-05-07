(()=> {

   // things left to do 
   //    - responsive design
   //    - json parsing 


   console.log('Hello');
   let backThisProjectButton = document.querySelector('.top__header__cta button:first-of-type');
   let sectionRewardsModal = document.querySelector('.rewards');
   let bookmarkButton = document.querySelector('.top__header__cta button:last-of-type');
   let selectRewardButtons = document.querySelectorAll('.promotional__rewards .rewards__cards button');
   let modalClose = document.querySelector('.rewards__header span');
   let modalCards = document.querySelectorAll('.rewards__form .modal');
   let modalButtons = document.querySelectorAll('.rewards .modal__cta button');
   let navLinks = document.querySelectorAll('nav a');
   let navCheckbox = document.querySelector('.nav__checkbox');
   let successButton = document.querySelector('.success__msg button');
   let SuccessDestination = document.querySelector('.bottom__header p:nth-of-type(2)');


   eventInit();

   function eventInit() {

      navLinks.forEach(navLink => {
         navLink.addEventListener('click', ()=> {
            navCheckbox.checked = false;
         });
      });

      backThisProjectButton.addEventListener('click', ()=> {
         toggleRewardsModal();
      });

      bookmarkButton.addEventListener('click', ()=> {
         toggleBookmarkButton();
      });

      selectRewardButtons.forEach(selectRewardButton => {
         selectRewardButton.addEventListener('click', ()=> {
            toggleRewardsModal();
            let selectedButtonClass = selectRewardButton.parentElement.classList[1];
            let destinationModal = document.querySelector(`#modal__${selectedButtonClass}`);
            destinationModal.scrollIntoView({block: 'center'});
            destinationModal.classList.add('modal--selected');
            destinationModal.querySelector('.custom__radio__btn input').checked = true;
            destinationModal.querySelector('.modal__cta__container').classList.remove('modal__cta--hide');
         });
      });

      modalClose.addEventListener('click', ()=> {
         modalReset();
         toggleRewardsModal();
      });

      modalCards.forEach(modalCard => {
         modalCard.addEventListener('click', selectModal);
      });

      modalButtons.forEach(modalButton => {
         modalButton.addEventListener('click', submitPledge);
      });

      successButton.addEventListener('click', ()=> {
         let modalDiv = document.querySelector('.rewards div');
         modalDiv.style.display = 'inherit';
         modalDiv.nextElementSibling.style.display = 'none';
         toggleRewardsModal();
         SuccessDestination.scrollIntoView({block: 'center'});
      });


   }



   function toggleRewardsModal() {
      sectionRewardsModal.classList.toggle('reward__modal--hide');
   }

   function toggleBookmarkButton() {
      bookmarkButton.querySelector('circle').classList.toggle('bookmarked__circle--fill');
      bookmarkButton.querySelector('path').classList.toggle('bookmarked__path--fill');
      changeSpanText();

      function changeSpanText() {
         let span = bookmarkButton.querySelector('span');
         
         if(span.innerHTML === 'Bookmarked') {
            return span.innerHTML = 'Bookmark';
         }
         return span.innerHTML = 'Bookmarked';
      }
   }


   function selectModal(event) {
      if(this.classList.contains('outofstock') === true) return;
      this.querySelector('.custom__radio__btn input').checked = true;
      let radioValue = this.querySelector('.custom__radio__btn input');
      if(radioValue.checked === true) {
         oneModalAtATime(this);
      }
   }

   function oneModalAtATime(dis) {
      for(let card of modalCards) {
         if(card!== dis) {
            card.classList.remove('modal--selected');
            card.querySelector('.modal__cta__container').classList.add('modal__cta--hide');
         }
         dis.classList.add('modal--selected');
         dis.querySelector('.modal__cta__container').classList.remove('modal__cta--hide');
      }
   }

   function modalReset() {
      modalCards.forEach(modalCard => {
         modalCard.classList.remove('modal--selected');
         modalCard.querySelector('.custom__radio__btn input').checked = false;
         let modalInput = modalCard.querySelector('.modal__cta__container input');
         modalInput.value = modalInput.min;
         if(modalInput.min === '1') modalInput.value = 0;
         modalInput.classList.remove('input--invalid')
         let errorSpan = modalCard.querySelector('.modal__cta__container span');
         errorSpan.classList.remove('input__span--invalid');
         errorSpan.innerHTML = '';
         modalCard.querySelector('.modal__cta__container').classList.add('modal__cta--hide');
      });
   }

   
   function submitPledge(event) {
      event.preventDefault();

      console.log('button clicked');
      let modalCard = event.target.parentElement.parentElement.parentElement;
      let modalPledgeAmount = modalCard.querySelector('.cta__input__container input')
      let modalRadio = modalCard.querySelector('.modal__radio__container input');
      let totalBackedAmountProgress = document.querySelector('header .bottom__header progress');
      let totalBackedAmountDisplay = document.querySelector('header .bottom__header p:first-of-type strong');
      let totalBackersDisplay = document.querySelector('header .bottom__header p:nth-of-type(2) strong');
      let errorSpan = modalCard.querySelector('.modal__cta__container span');

      let intModalPledgeAmount = parseInt(modalPledgeAmount.value);

      resetErrorMsg(errorSpan, modalPledgeAmount);
      if(inputErrorHandler(errorSpan, modalPledgeAmount, intModalPledgeAmount) === true) return;


      if(modalRadio.id !== 'radio__norewards') {
         if(isPledgeAmountLesserThanRequired(modalPledgeAmount, intModalPledgeAmount) === true) return;
         updateStock(modalRadio);
      }

      updateBackers(totalBackersDisplay);
      updateBackedAmount(totalBackedAmountDisplay, intModalPledgeAmount, totalBackedAmountProgress);

      setTimeout(()=> {
         modalReset();
      }, 500);

      setTimeout(()=> {
         toggleRewardsModal();
         SuccessDestination.scrollIntoView({block: 'center'});
      },700);

      setTimeout(()=> {
         toggleRewardsModal();
         let modalDiv = document.querySelector('.rewards div');
         modalDiv.style.display = 'none';
         modalDiv.nextElementSibling.style.display = 'flex';
         document.querySelector('.success__msg p strong').scrollIntoView({block: 'center'});
      },2000);
   }

   function inputErrorHandler(errorSpan, modalPledgeAmount, intModalPledgeAmount) {
      let error = false;

      if(isOnlyNumber(modalPledgeAmount) === false) error = true;
      if(intModalPledgeAmount < 1) error = true;
      
      if(error === true) {
         modalPledgeAmount.classList.add('input--invalid');
         errorSpan.classList.add('input__span--invalid');
         errorSpan.innerHTML = 'Please enter a valid amount';
      }
      
      return error;
   }

   function resetErrorMsg(errorSpan, modalPledgeAmount) {
      errorSpan.classList.remove('input__span--invalid');
      errorSpan.innerHTML = '';
      modalPledgeAmount.classList.remove('input--invalid');
   }

   function isOnlyNumber(modalPledgeAmount) {
      var pattern = /^\d+$/;
      return pattern.test(modalPledgeAmount.value);
   }


   function isPledgeAmountLesserThanRequired(modalPledgeAmount, intModalPledgeAmount) {
      let minPledgeRequired = parseInt(modalPledgeAmount.min);
      if(minPledgeRequired > intModalPledgeAmount) {
         console.log('lesser than required');
         modalPledgeAmount.classList.add('input--invalid');
         modalPledgeAmount.parentElement.parentElement.nextElementSibling.classList.add('input__span--invalid');
         modalPledgeAmount.parentElement.parentElement.nextElementSibling.innerHTML = 'Please enter the required amount or above';
         return true;
      }
      return false;
   }

   function updateStock(modalRadio) {
      let modalStock = document.querySelector('.modal__text__container p strong');
      let promotionStock = document.querySelector(`.promotional__rewards .${modalRadio.id} p strong`);
      let intStock = parseInt(modalStock.innerHTML);
      intStock -= 1;
      modalStock.innerHTML = intStock;
      promotionStock.innerHTML = intStock;
   }

   function updateBackers(totalBackersDisplay) {
      let intTotalBackersDisplay = parseInt(totalBackersDisplay.innerHTML.replace(/[^0-9\.]+/g,''));
      intTotalBackersDisplay+= 1;
      intTotalBackersDisplay = intTotalBackersDisplay.toLocaleString();
      totalBackersDisplay.innerHTML = intTotalBackersDisplay;
   }

   function updateBackedAmount(totalBackedAmountDisplay, intModalPledgeAmount, totalBackedAmountProgress) {
      let intTotalBackedAmountDisplay = parseInt(totalBackedAmountDisplay.innerHTML.replace(/[^0-9\.]+/g,''));
      intTotalBackedAmountDisplay+= intModalPledgeAmount;
      updateProgressBarValue(totalBackedAmountProgress, intTotalBackedAmountDisplay);
      intTotalBackedAmountDisplay = intTotalBackedAmountDisplay.toLocaleString();
      totalBackedAmountDisplay.innerHTML = `$${intTotalBackedAmountDisplay}`;
   }

   function updateProgressBarValue(totalBackedAmountProgress, intTotalBackedAmountDisplay) {
      totalBackedAmountProgress.value = intTotalBackedAmountDisplay;
   }



})();
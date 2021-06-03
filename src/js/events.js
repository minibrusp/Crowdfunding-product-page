import checkStocksAvailability from './checkStocks.js';
export default function eventInit(project) {

   let backThisProjectButton = document.querySelector('.top__header__cta button:first-of-type');
   let bookmarkButton = document.querySelector('.top__header__cta button:last-of-type');
   let selectRewardButtons = document.querySelectorAll('.promotional__rewards .rewards__cards button');
   let modalClose = document.querySelector('.rewards__header span');
   let modalCards = document.querySelectorAll('.rewards__form .modal');
   let modalButtons = document.querySelectorAll('.rewards .modal__cta button');
   let navLinks = document.querySelectorAll('nav a');
   let navCheckbox = document.querySelector('.nav__checkbox');
   let successButton = document.querySelector('.success__msg button');
   let SuccessDestination = document.querySelector('.bottom__header p:nth-of-type(2)');
   let burgerMenu = document.querySelector('nav .nav__burger');
   let sectionRewardsModal = document.querySelector('.rewards');
   let footerLinks = document.querySelectorAll('footer a');
   let body = document.querySelector('body');
   let CurrentRewards = [];
   let CurrentStatus = [];
   let rewardID, rewardName, rewardDescription,
   rewardPledgeMinimum, rewardStock;
   let currentBacked, currentBackers;

   variableStates();

   burgerMenu.addEventListener('keyup', (event)=> {
      if(event.keyCode!== 13 && event.keyCode!== 32) return;
      if(navCheckbox.checked === false) {
         tabIndexExceptNavLinks('-1');
         toggleBodyScrolling();
         return navCheckbox.checked = true;
      }
      tabIndexExceptNavLinks('0');
      toggleBodyScrolling();
      return navCheckbox.checked = false;
   });
   burgerMenu.addEventListener('keyup', (event)=> {
      if(event.keyCode !== 27) return;
      if(navCheckbox.checked === false) return;
      tabIndexExceptNavLinks('0');
      toggleBodyScrolling();
      navCheckbox.checked = false;
   });

   burgerMenu.addEventListener('click', ()=> {
      if(navCheckbox.checked === false) {
         tabIndexExceptNavLinks('-1');
         toggleBodyScrolling();
         return;
      }
      tabIndexExceptNavLinks('0');
      toggleBodyScrolling();
      return;
   });

   navLinks.forEach(navLink => {
      navLink.addEventListener('click', ()=> {
         tabIndexExceptNavLinks('0');
         if(navCheckbox.checked === true) toggleBodyScrolling();
         navCheckbox.checked = false;
      });
   });

   backThisProjectButton.addEventListener('click', ()=> {
      tabIndex('-1');
      toggleRewardsModal();
      document.querySelector('.rewards__header h2').style.outline = 'none';
      document.querySelector('.rewards__header h2').focus();
   });

   bookmarkButton.addEventListener('click', ()=> {
      toggleBookmarkButton();
   });

   selectRewardButtons.forEach(selectRewardButton => {
      selectRewardButton.addEventListener('click', ()=> {
         tabIndex('-1');
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
      tabIndex('0');
      modalReset();
      toggleRewardsModal();
   });

   modalClose.addEventListener('keyup',(event)=> {
      if(event.keyCode!== 13 && event.keyCode!== 32) return;
      tabIndex('0');
      modalReset();
      toggleRewardsModal();
   });

   modalCards.forEach(modalCard => {
      modalCard.addEventListener('click', selectModal);
      modalCard.addEventListener('focus', tabsSelectModal);
      modalCard.addEventListener('keyup', tabsModalSelection);
   });

   modalButtons.forEach(modalButton => {
      modalButton.addEventListener('click', submitPledge);
   });

   successButton.addEventListener('click', ()=> {
      let modalDiv = document.querySelector('.rewards div');
      modalDiv.style.display = 'inherit';
      modalDiv.nextElementSibling.classList.toggle('success__msg--active');
      toggleRewardsModal();
      tabIndex('0');
      SuccessDestination.scrollIntoView({block: 'center'});
   });

   // end of events init 

   function toggleBodyScrolling() {
      body.classList.toggle('scrolling--disabled');
   }
   
   function tabIndexOnNav(value) {
      navLinks.forEach(navLink => {
         navLink.tabIndex = value;
      });
      burgerMenu.tabIndex = value;
   }
   
   function tabIndexExceptNavLinks(value) {
      backThisProjectButton.tabIndex = value;
      bookmarkButton.tabIndex = value;
      selectRewardButtons.forEach(selectRewardButton => {
         selectRewardButton.tabIndex = value;
      });
      footerLinks.forEach(footerLink => {
         footerLink.tabIndex = value;
      });
   }
   
   function tabIndex(value) {
      tabIndexOnNav(value);
      tabIndexExceptNavLinks(value);
   }
   
   function toggleRewardsModal() {
      sectionRewardsModal.classList.toggle('reward__modal--hide');
   }
   
   function toggleBookmarkButton() {
      bookmarkButton.querySelector('circle').classList.toggle('bookmarked__circle--fill');
      bookmarkButton.querySelector('path').classList.toggle('bookmarked__path--fill');
      bookmarkButton.querySelector('span').classList.toggle('bookmarked__span--color');
      changeSpanText();
   
      function changeSpanText() {
         let span = bookmarkButton.querySelector('span');
         
         if(span.innerHTML === 'Bookmarked') {
            return span.innerHTML = 'Bookmark';
         }
         return span.innerHTML = 'Bookmarked';
      }
   }
   
   function tabsModalSelection(event) {
      if(event.keyCode!== 13 && event.keyCode!== 32) return;
      if(this.classList.contains('outofstock') === true) return;
      this.querySelector('.custom__radio__btn input').checked = true;
      let radioValue = this.querySelector('.custom__radio__btn input');
      if(radioValue.checked === true) {
         oneModalAtATime(this);
      }
   }
   
   function tabsSelectModal(event) {
      if(this.classList.contains('outofstock') === true) return;
         tabsOneModalAtATime(this);
   }
   
   function tabsOneModalAtATime(dis) {
      for(let card of modalCards) {
         if(card!== dis) {
            card.classList.remove('modal--selected');
         }
         dis.classList.add('modal--selected');
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
         let errorSpan = card.querySelector('.modal__cta__container p');
         let modalPledgeAmount = card.querySelector('.modal__cta__container input');
         if(card!== dis) {
            card.classList.remove('modal--selected');
            card.querySelector('.modal__cta__container').classList.add('modal__cta--hide');
            resetErrorMsg(errorSpan, modalPledgeAmount);
            modalPledgeAmount.value = modalPledgeAmount.min;
            if(modalPledgeAmount.min === '1') modalPledgeAmount.value = 0;
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
         let errorSpan = modalCard.querySelector('.modal__cta__container p');
         errorSpan.classList.remove('input__message--invalid');
         errorSpan.innerHTML = 'Enter your pledge';
         modalCard.querySelector('.modal__cta__container').classList.add('modal__cta--hide');
      });
   }
   
   
   function submitPledge(event) {
      event.preventDefault();

      let modalCard = event.target.parentElement.parentElement.parentElement;
      let modalPledgeAmount = modalCard.querySelector('.cta__input__container input')
      let modalRadio = modalCard.querySelector('.modal__radio__container input');
      let totalBackedAmountProgress = document.querySelector('header .bottom__header progress');
      let totalBackedAmountDisplay = document.querySelector('header .bottom__header p:first-of-type strong');
      let totalBackersDisplay = document.querySelector('header .bottom__header p:nth-of-type(2) strong');
      let errorSpan = modalCard.querySelector('.modal__cta__container p');

      let modalID = modalCard.id
      
      CurrentRewards.map(reward => {
         if(modalID === `modal__${reward.id}`) {
            rewardID = `modal__${reward.id}`;
            rewardName = reward.name;
            rewardDescription = reward.description;
            rewardPledgeMinimum = reward.pledgeMinimum;
            rewardStock = reward.stock;
         }
      });
   
      let intModalPledgeAmount = parseInt(modalPledgeAmount.value);
   
      resetErrorMsg(errorSpan, modalPledgeAmount);
      if(inputErrorHandler(errorSpan, modalPledgeAmount, intModalPledgeAmount) === true) return;
   
   
      if(modalRadio.id !== 'radio__norewards') {
         if(isPledgeAmountLesserThanRequired(modalPledgeAmount, intModalPledgeAmount, rewardPledgeMinimum) === true) return;
         updateStock(modalRadio, rewardStock, modalID);
      }
   
      updateBackers(totalBackersDisplay, currentBackers);
      updateBackedAmount(totalBackedAmountDisplay, intModalPledgeAmount, totalBackedAmountProgress, currentBacked);
      checkStocksAvailability();
      modalReset();
      let modalDiv = document.querySelector('.rewards div');
      modalDiv.style.display = 'none';
   
      setTimeout(()=> {
         modalDiv.nextElementSibling.classList.toggle('success__msg--active');
         document.querySelector('.success__msg p strong').scrollIntoView({block: 'center'});
      }, 500);
   
   }
   
   function inputErrorHandler(errorSpan, modalPledgeAmount, intModalPledgeAmount) {
      let error = false;
   
      if(isOnlyNumber(modalPledgeAmount) === false) error = true;
      if(intModalPledgeAmount < 1) error = true;
      
      if(error === true) {
         modalPledgeAmount.classList.add('input--invalid');
         errorSpan.classList.add('input__message--invalid');
         errorSpan.innerHTML = 'Please enter a valid amount';
      }
      
      return error;
   }
   
   function resetErrorMsg(errorSpan, modalPledgeAmount) {
      errorSpan.classList.remove('input__message--invalid');
      errorSpan.innerHTML = 'Enter your pledge';
      modalPledgeAmount.classList.remove('input--invalid');
   }
   
   function isOnlyNumber(modalPledgeAmount) {
      var pattern = /^\d+$/;
      return pattern.test(modalPledgeAmount.value);
   }
   
   
   function isPledgeAmountLesserThanRequired(modalPledgeAmount, intModalPledgeAmount, rewardPledgeMinimum) {
      if(rewardPledgeMinimum > intModalPledgeAmount) {
         modalPledgeAmount.classList.add('input--invalid');
         modalPledgeAmount.parentElement.parentElement.parentElement.querySelector('p').classList.add('input__message--invalid');
         modalPledgeAmount.parentElement.parentElement.parentElement.querySelector('p').innerHTML = 'Please enter the required amount or above';
         return true;
      }
      return false;
   }
   
   function updateStock(modalRadio, rewardStock, modalID) {
      console.log(rewardStock);
      let modalStock = document.querySelector(`#modal__${modalRadio.id} .modal__top p strong`);
      let promotionStock = document.querySelector(`.promotional__rewards .${modalRadio.id} p strong`);
      let intStock = rewardStock;
      intStock -= 1;
      modalStock.innerHTML = intStock;
      promotionStock.innerHTML = intStock;
      updateCurrentStock(intStock, modalID);
   }
   
   function updateBackers(totalBackersDisplay, currentBackers) {
      let newCurrentBackers;
      newCurrentBackers= 1 + currentBackers;
      updateCurrentBackers(newCurrentBackers);
      newCurrentBackers = newCurrentBackers.toLocaleString();
      totalBackersDisplay.innerHTML = newCurrentBackers;
   }
   
   function updateBackedAmount(totalBackedAmountDisplay, intModalPledgeAmount, totalBackedAmountProgress, currentBacked) {
      let newCurrentBacked;
      newCurrentBacked = intModalPledgeAmount + currentBacked;
      updateCurrentBackedAmount(newCurrentBacked)
      updateProgressBarValue(totalBackedAmountProgress, newCurrentBacked);
      newCurrentBacked = newCurrentBacked.toLocaleString();
      totalBackedAmountDisplay.innerHTML = `$${newCurrentBacked}`;
   }
   
   function updateProgressBarValue(totalBackedAmountProgress, newCurrentBacked) {
      totalBackedAmountProgress.value = newCurrentBacked;
   }

   function updateCurrentStock(intStock, modalID) {
      CurrentRewards.map(reward => {
         if(modalID === `modal__${reward.id}`) {
            reward.stock = intStock;
         }
      });
   }

   function updateCurrentBackers(newCurrentBackers) {
      currentBackers = newCurrentBackers;
   }

   function updateCurrentBackedAmount(newCurrentBacked) {
      currentBacked = newCurrentBacked;
   }

   function variableStates() {
      project.rewards.map(reward => {
         CurrentRewards.push(reward);
      })
   
      currentBacked = project.status.backed;
      currentBackers = project.status.backers;
   }

   
}






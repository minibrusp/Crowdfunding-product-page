export default function renderApp(project) {
   let body = document.querySelector('body');
   let header = document.createElement('header');
   let main = document.createElement('main');
   let article = document.createElement('article');
   let headerMain = document.createElement('header');
   let divTopHeader = document.createElement('div');
   let divBotHeader = document.createElement('div');
   let footer = document.createElement('footer');

   header.className = 'masthead';
   renderHeaderMasthead(header);

   article.className = project.id;
   divTopHeader.className = 'top__header';
   divTopHeader.classList.add('content__card');
   renderTopHeader(project, divTopHeader);

   divBotHeader.className = 'bottom__header';
   divBotHeader.classList.add('content__card');
   renderBottomHeader(project, divBotHeader);

   footer.className = 'attribution';

   body.appendChild(header);
   body.appendChild(main);
   main.appendChild(article);
   article.appendChild(headerMain);
   headerMain.appendChild(divTopHeader);
   headerMain.appendChild(divBotHeader);
   renderSectionAbout(project, article);
   renderSectionRewardsModal(project, main);

   body.appendChild(footer);
   renderFooter(footer);


}

function renderHeaderMasthead(parentNode) {
   let nav = document.createElement('nav');
   let aLogo = document.createElement('a');
   let imgLogo = document.createElement('img');
   let navCheckbox = document.createElement('input');
   let labelBurger = document.createElement('label');
   let divFilter = document.createElement('div');
   let navUL = document.createElement('ul');
   let navLi1 = document.createElement('li');
   let navLi2 = document.createElement('li');
   let navLi3 = document.createElement('li');
   let navLiAnchor1 = document.createElement('a');
   let navLiAnchor2 = document.createElement('a');
   let navLiAnchor3 = document.createElement('a');

   aLogo.href = '#';
   aLogo.className = 'logo';
   aLogo.title = 'To Crowdfunding\'s homepage';

   imgLogo.src = '../../assets/logo.svg';
   imgLogo.alt = 'Crowdfunding';

   aLogo.appendChild(imgLogo);

   navCheckbox.type = 'checkbox';
   navCheckbox.className = 'nav__checkbox';
   navCheckbox.id = 'nav__checkbox';

   labelBurger.className = 'nav__burger';
   labelBurger.htmlFor = 'nav__checkbox';
   labelBurger.tabIndex = '0';

   divFilter.className = 'nav__filter__container';

   navUL.appendChild(navLi1);
   navUL.appendChild(navLi2);
   navUL.appendChild(navLi3);

   navLiAnchor1.href = '#about';
   navLiAnchor1.title = 'To About page';
   navLiAnchor1.innerHTML = 'About';

   navLiAnchor2.href = '#';
   navLiAnchor2.title = 'To Discover page';
   navLiAnchor2.innerHTML = 'Discover';

   navLiAnchor3.href = '#';
   navLiAnchor3.title = 'To get Started page';
   navLiAnchor3.innerHTML = 'Get Started';

   navLi1.appendChild(navLiAnchor1);
   navLi2.appendChild(navLiAnchor2);
   navLi3.appendChild(navLiAnchor3);


   parentNode.appendChild(nav);
   nav.appendChild(aLogo);
   nav.appendChild(navCheckbox);
   nav.appendChild(labelBurger);
   nav.appendChild(divFilter);
   nav.appendChild(navUL);




}

function renderTopHeader(project, parentNode) {
   let h1 = document.createElement('h1');
   let para = document.createElement('p');
   let divCta = document.createElement('div');
   h1.textContent = project.title;
   para.textContent = project.subtitle;
   divCta.className = 'top__header__cta';
   renderTopHeaderCta(divCta);
   parentNode.prepend(para);
   parentNode.prepend(h1);
   parentNode.appendChild(divCta);
}

function renderTopHeaderCta(parentNode) {
   let button1 = document.createElement('button');
   let button2 = document.createElement('button');
   let button2Span = document.createElement('span');

   button1.textContent = 'Back this project';
   button2.innerHTML = `
   <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
         <circle fill="#2F2F2F" cx="28" cy="28" r="28"></circle>
         <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"></path>
      </g>
   </svg>`;
   button2Span.textContent = 'Bookmark';
   button2.appendChild(button2Span);

   parentNode.appendChild(button1);
   parentNode.appendChild(button2);
}

function renderBottomHeader(project, parentNode) {
   let para1 = document.createElement('p');
   let para2 = document.createElement('p');
   let para3 = document.createElement('p');
   let progress = document.createElement('progress');
   let strong1 = document.createElement('strong');
   let strong2 = document.createElement('strong');
   let strong3 = document.createElement('strong');
   let div1 = document.createElement('div');

   div1.className = 'bottom__header__highlights';


   strong1.textContent = `$${project.status.backed.toLocaleString()}`;
   strong2.textContent = project.status.backers.toLocaleString();
   strong3.textContent = project.status.daysleft.toLocaleString();

   para1.innerHTML = `${strong1.outerHTML} of ${project.status.backedlimit.toLocaleString()} backed`;
   para2.innerHTML = `${strong2.outerHTML} total backers`;
   para3.innerHTML = `${strong3.outerHTML} days left`;

   progress.value = project.status.backed;
   progress.max = project.status.backedlimit;

   parentNode.appendChild(div1);
   div1.appendChild(para1);
   div1.appendChild(para2);
   div1.appendChild(para3);
   div1.parentElement.appendChild(progress);

}


function renderSectionAbout(project, parentNode) {
   let sectionAbout = document.createElement('section');
   sectionAbout.className = 'about';
   sectionAbout.id = 'about';
   sectionAbout.classList.add('content__card');
   parentNode.appendChild(sectionAbout);
   renderSectionAboutHeading(project, sectionAbout);
   renderPromotionalRewards(project, sectionAbout);
}

function renderSectionAboutHeading(project, parentNode) {
   let h2 = document.createElement('h2');
   h2.textContent = 'About this project';
   parentNode.appendChild(h2);

   project.description.map(description => {
      let p = document.createElement('p');
      p.textContent = description;
      parentNode.appendChild(p);
   });
}

function renderPromotionalRewards(project, parentNode) {

   let sectionPromotionalRewards = document.createElement('section');
   sectionPromotionalRewards.className = 'promotional__rewards';
   parentNode.appendChild(sectionPromotionalRewards);

   renderPromotionalRewardsItems(project, sectionPromotionalRewards);

}

function renderPromotionalRewardsItems(project, parentNode) {

   const promotionalRewardsArray = project.rewards.filter(reward => reward.id !== 'norewards');

   promotionalRewardsArray.map(promoReward => {
      let div = document.createElement('div');
      div.className = 'rewards__cards';
      div.classList.add(`${promoReward.id}`);

      parentNode.appendChild(div);

      let h3 = document.createElement('h3');
      h3.textContent = `${promoReward.name}`;

      div.appendChild(h3);

      let p1 = document.createElement('p');
      p1.textContent = `Pledge $${promoReward.pledgeMinimum} or more`;

      div.appendChild(p1);

      let p2 = document.createElement('p');
      p2.textContent = promoReward.description;

      div.appendChild(p2);

      let p3 = document.createElement('p');
      let strongStock = document.createElement('strong');
      strongStock.textContent = promoReward.stock;
      p3.innerHTML = `${strongStock.outerHTML} left`;

      div.appendChild(p3);

      let button = document.createElement('button');
      button.textContent = 'Select Reward';

      div.appendChild(button);

      let divOutOfStock = document.createElement('div');
      divOutOfStock.className = 'reward__outofstock';

      div.appendChild(divOutOfStock);

   });

}

function renderSectionRewardsModal(project, parentNode) {
   let sectionRewards = document.createElement('section');
   let divContentCard = document.createElement('div');
   let divSuccessMsg = document.createElement('div');

   sectionRewards.className = 'rewards';
   sectionRewards.classList.add('reward__modal--hide');

   parentNode.appendChild(sectionRewards);

   divContentCard.className = 'content__card';
   renderContentCard(project, divContentCard);

   sectionRewards.appendChild(divContentCard);

   divSuccessMsg.className = 'success__msg';
   divSuccessMsg.classList.add('content__card');
   renderDivSuccessMsg(divSuccessMsg);

   sectionRewards.appendChild(divSuccessMsg);

   

}

function renderContentCard(project, parentNode) {
   let divRewardsHeader = document.createElement('div');
   let para = document.createElement('p');
   let modalForm = document.createElement('form');

   divRewardsHeader.className = 'rewards__header';
   renderDivRewardsHeader(divRewardsHeader);
   parentNode.appendChild(divRewardsHeader);

   para.textContent = `Want to support us in bringing ${project.title} out in the world?`;

   parentNode.appendChild(para);

   modalForm.action = 'submit';
   modalForm.className = 'rewards__form';
   renderModalForm(project, modalForm);
   parentNode.appendChild(modalForm);
}

function renderDivRewardsHeader(parentNode) {
   let h2 = document.createElement('h2');
   let spanModalClose = document.createElement('span');

   h2.textContent = 'Back this project';
   h2.tabIndex = '-1';
   spanModalClose.tabIndex = '0';

   parentNode.appendChild(h2);
   parentNode.appendChild(spanModalClose);
}

function renderModalForm(project, parentNode) {
   let formFieldset = document.createElement('fieldset');

   formFieldset.id = 'rewards__fieldset';
   formFieldset.className = 'rewards__fieldset';
   renderModalFieldsetItems(project, formFieldset);
   parentNode.appendChild(formFieldset);
}

function renderModalFieldsetItems(project, parentNode) {
   project.rewards.map(reward => {
      let divModal = document.createElement('div');

      divModal.className = 'rewards__cards';
      divModal.classList.add('modal');
      divModal.id = `modal__${reward.id}`;
      divModal.tabIndex = '0';
      renderDivModal(reward, divModal, project);

      parentNode.appendChild(divModal);
   });
}

function renderDivModal(reward, parentNode, project) {
   let divModalTop = document.createElement('div');
   let divModalCtaContainer = document.createElement('div');

   divModalTop.className = 'modal__top';
   renderModalTop(reward, divModalTop);
   divModalCtaContainer.className = 'modal__cta__container';
   divModalCtaContainer.classList.add('modal__cta--hide');
   renderDivModalCtaContainer(reward, divModalCtaContainer, project);

   parentNode.appendChild(divModalTop);
   parentNode.appendChild(divModalCtaContainer);
}

function renderModalTop(reward, parentNode) {
   let divModalRadioContainer = document.createElement('div');
   let rewardDescription = document.createElement('p');
   let StockContainerPara = document.createElement('p');
   let stock = document.createElement('strong');
   let divOutOfStock = document.createElement('div');

   divModalRadioContainer.className = 'modal__radio__container';
   renderModalRadioContainer(reward, divModalRadioContainer);
   parentNode.appendChild(divModalRadioContainer);



   rewardDescription.textContent = reward.description;

   parentNode.appendChild(rewardDescription);

   if(reward.id!== 'norewards') {
      stock.textContent = reward.stock;
      StockContainerPara.innerHTML = `${stock.outerHTML} left`;
      parentNode.appendChild(StockContainerPara);
   }

   divOutOfStock.className = 'modal__outofstock';
   parentNode.appendChild(divOutOfStock);

}

function renderModalRadioContainer(reward, parentNode) {
   let labelCustomRadioBtn = document.createElement('label');
   let labelModalRadioContainerLeft = document.createElement('label');

   labelCustomRadioBtn.className = 'custom__radio__btn';
   renderLabelCustomRadioBtn(reward, labelCustomRadioBtn);

   labelModalRadioContainerLeft.className = 'modal__radio__container__left';
   labelModalRadioContainerLeft.htmlFor = `radio__${reward.id}`;
   renderLabelModalRadioContainerLeft(reward, labelModalRadioContainerLeft);

   parentNode.appendChild(labelCustomRadioBtn);
   parentNode.appendChild(labelModalRadioContainerLeft);

}

function renderLabelCustomRadioBtn(reward, parentNode) {
   let radioButton = document.createElement('input');
   let spanCheckmark = document.createElement('span');

   radioButton.type = 'radio';
   radioButton.value = 0;
   radioButton.id = `radio__${reward.id}`;
   radioButton.name = 'pledges';
   if(reward.id !== 'norewards') {
      radioButton.value = reward.pledgeMinimum;
      radioButton.id = reward.id;
   }

   spanCheckmark.className = 'checkmark';

   parentNode.appendChild(radioButton);
   parentNode.appendChild(spanCheckmark);
}

function renderLabelModalRadioContainerLeft(reward, parentNode) {

   let spanTitle = document.createElement('span');
   let spanSubtitle = document.createElement('span');

   spanTitle.textContent = reward.name;
   parentNode.appendChild(spanTitle);

   if(reward.id !== 'norewards') {
      spanSubtitle.textContent = `Pledge $${reward.pledgeMinimum} or more`;
      parentNode.appendChild(spanSubtitle);
   }
}

function renderDivModalCtaContainer(reward, parentNode, project) {
   let paraCtaMessage = document.createElement('p');
   let divModalCta = document.createElement('div');

   paraCtaMessage.textContent = 'Enter your pledge';
   divModalCta.className = 'modal__cta';
   renderDivModalCta(reward, divModalCta, project);

   parentNode.appendChild(paraCtaMessage);
   parentNode.appendChild(divModalCta);
}

function renderDivModalCta(reward, parentNode, project) {
   let divCtaInputContainer = document.createElement('div');
   let submitButton = document.createElement('button');

   divCtaInputContainer.className = 'cta__input__container';
   renderDivCtaInputContainer(reward, divCtaInputContainer, project);
   submitButton.textContent = 'Continue';

   parentNode.appendChild(divCtaInputContainer);
   parentNode.appendChild(submitButton);
}


function renderDivCtaInputContainer(reward, parentNode, project) {

   let inputPledge = document.createElement('input');
   let labelDollarSign = document.createElement('label');

   inputPledge.type = 'number';
   inputPledge.name = 'pledgeamount'
   inputPledge.value = 0;
   if(reward.id !== 'norewards') {
      inputPledge.value = reward.pledgeMinimum;
   }
   inputPledge.min = reward.pledgeMinimum;
   inputPledge.id = getIndex(reward, project);

   labelDollarSign.htmlFor = getIndex(reward, project);
   labelDollarSign.innerHTML = '&dollar;';

   parentNode.appendChild(inputPledge);
   parentNode.appendChild(labelDollarSign);

   function getIndex(reward, project) {
      let index = 0;

      for(let index = 0; index <= project.rewards.length - 1; index++) {
         if(reward.id === project.rewards[index].id) {
            let num = index + 1;
            return 'pledgeamount'+num;
         }
      }
   }
}

function renderDivSuccessMsg(parentNode) {
   let divSuccessCheckImg = document.createElement('div');
   let divSuccessTextContainer = document.createElement('div');
   let divSuccessBtnContainer = document.createElement('div');

   divSuccessCheckImg.className = 'success__text__container';
   divSuccessTextContainer.className = 'success__text__container';
   divSuccessBtnContainer.className = 'success__btn__container';

   renderDivSuccessCheckImg(divSuccessCheckImg);
   renderDivSuccessTextContainer(divSuccessTextContainer);
   renderDivSuccessBtnContainer(divSuccessBtnContainer);

   parentNode.appendChild(divSuccessCheckImg);
   parentNode.appendChild(divSuccessTextContainer);
   parentNode.appendChild(divSuccessBtnContainer);
}

function renderDivSuccessCheckImg(parentNode) {
   let imgCheck = document.createElement('img');

   imgCheck.src = '../../assets/icon-check.svg';
   imgCheck.alt = 'check';

   parentNode.appendChild(imgCheck);
}

function renderDivSuccessTextContainer(parentNode) {
   let p1 = document.createElement('p');
   let p2 = document.createElement('p');
   let strong = document.createElement('strong');

   strong.textContent = 'Thanks for your support!';
   p1.appendChild(strong);
   p2.textContent = 'Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.';

   parentNode.appendChild(p1);
   parentNode.appendChild(p2);
}

function renderDivSuccessBtnContainer(parentNode) {
   let buttonSuccess = document.createElement('button');

   buttonSuccess.textContent = 'Got it!';

   parentNode.appendChild(buttonSuccess);
}

function renderFooter(parentNode) {
   let p = document.createElement('p');
   let aFrontEndMentor = document.createElement('a');
   let aAuthor = document.createElement('a');

   aFrontEndMentor.href = "https://www.frontendmentor.io?ref=challenge";
   aFrontEndMentor.target = '_blank';
   aFrontEndMentor.innerHTML = 'Frontend Mentor';
   aFrontEndMentor.title = 'link to frontendmentor';

   aAuthor.href = 'https://www.frontendmentor.io/profile/minibrusp';
   aAuthor.target = '_blank';
   aAuthor.innerHTML = 'XIII';
   aAuthor.title = 'link to user profile on frontendmentor';

   p.innerHTML = `Challenge by ${aFrontEndMentor.outerHTML}. Coded by ${aAuthor.outerHTML}.`;

   parentNode.appendChild(p);
}
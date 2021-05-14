export default function styles() {
   let styles = document.createElement('style');
   let script = document.querySelector('script');

   styles.innerHTML = `      
      @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap');
      /* font-family: 'Commissioner', sans-serif; */

      /* globals  */

      :root {
         --Primary-Moderate-Cyan: hsl(176, 50%, 47%);
         --Primary-Dark-Cyan: hsl(176, 72%, 28%);
         --Neutral-Black: hsl(0, 0%, 0%);
         --Neutral-Dark-Gray: hsl(0, 0%, 48%);
      }

      *,
      *::before,
      *::after {
         box-sizing: border-box;
      }

      *:focus-visible {
         outline: 2px dashed var(--Primary-Moderate-Cyan);
         outline-offset: 4px;
      }


      html {
         box-sizing: inherit;
         font-size: 16px;
      }

      body {
         margin: 0;
         padding: 0;
         font-family: 'Commissioner', sans-serif;
         font-size: 1rem;
         background-color: hsl(0, 0%, 95%);
         position: relative;
      }

      a {
         text-decoration: none;
      }

      ul {
         list-style-type: none;
         padding-left: 0;
      }

      h1 {
         font-size: 1.3rem;
      }

      h2 {
         font-size: 1.1rem;
      }

      h3 {
         font-size: .9rem;
      }


      p {
         color: var(--Neutral-Dark-Gray);
         font-size: 0.875rem;
         line-height: 1.7;
      }

      button {
         background-color: var(--Primary-Moderate-Cyan);
         border: none;
         color: white;
         font-weight: 700;
         padding: 1rem 2rem;
         border-radius: 25px;
         cursor: pointer;
         font-family: 'Commissioner', sans-serif;
      }

      button:hover {
         background-color: var(--Primary-Dark-Cyan);
      }

      button:disabled {
         background-color: var(--Neutral-Dark-Gray);
      }

      strong {
         color: black;
      }


      /* header  */

      header.masthead {
         height: 300px;
         background-image: url(../../assets/image-hero-mobile.jpg);
         background-repeat: no-repeat;
         background-size: cover;
         padding-top: 2rem;
         padding: 2rem 1.5rem 2rem 1.5rem;
      }

      header.masthead nav {
         display: flex;
         justify-content: space-between;
         align-items: center;
         position: relative;
         z-index: 2;
      }

      header.masthead .logo {
         z-index: 2;
      }

      header.masthead .logo:hover,
      header.masthead .logo:focus {
         transform: scale(1.1);
      }

      header.masthead .nav__checkbox {
         display: none;
      }

      header.masthead .nav__burger {
         display: inline-block;
         background-image: url(../../assets/icon-hamburger.svg);
         width: 20px;
         height: 15px;
         cursor: pointer;
         z-index: 3;
         transition: transform .3s;
      }

      header.masthead .nav__burger:hover {
         transform: scale(1.1);
         outline: none;
      }

      header.masthead .nav__checkbox:checked~.nav__burger {
         background-image: url(../../assets/icon-close-menu.svg);
         background-repeat: no-repeat;
         width: 20px;
         height: 20px;
         background-position: center;
         transform: rotate(-180deg) scale(1);
         transition: transform .3s;
      }

      header.masthead .nav__filter__container {
         width: 100%;
         height: 0;
         background-image: linear-gradient(180deg, black, transparent);
         background-size: 200%;
         position: fixed;
         left: 0;
         top: 0;
         opacity: 0;
         z-index: -1;
         transform-origin: top;
         transform: scaleY(0);
      }

      header.masthead .nav__checkbox:checked~.nav__filter__container {
         display: block;
         opacity: 0.7;
         height: 95vh;
         transform: scale(1);
         transition: all .3s;

      }

      header.masthead ul {
         display: block;
         background-color: white;
         margin-top: 55px;
         width: 100%;
         position: absolute;
         top: 0;
         border-radius: 10px;
         height: 0;
         opacity: 0;
         overflow: hidden;
         transition: all .5s;
      }

      header.masthead .nav__checkbox:checked~ul {
         opacity: 1;
         height: 227px;
         transition: all .5s;
      }

      header.masthead ul>li {
         border-bottom: 1px solid lightgray;
      }

      header.masthead ul>li:hover {
         border-bottom: 1px solid var(--Primary-Moderate-Cyan);
         transition: all .5s;
      }

      header.masthead ul a {
         display: none;
         color: var(--Neutral-Black);
         padding: 28px 25px;
         font-weight: 500;
         transition: all .5s;
      }

      header.masthead .nav__checkbox:checked~ul a {
         display: block;
      }

      header.masthead ul a:hover,
      header.masthead ul a:focus {
         background-color: var(--Primary-Moderate-Cyan);
         outline: none;
      }


      /* main article  */

      article {
         margin: -85px 1.5rem;
      }

      header .top__header,
      header .bottom__header {
         text-align: center;
      }

      .content__card {
         background-color: hsl(0, 0%, 100%);
         border-radius: 10px;
         padding: 40px 23px;
         margin: 26px auto;
      }

      /* top header */

      .top__header {
         position: relative;
      }

      .top__header::before {
         content: '';
         display: block;
         background-image: url(../../assets/logo-mastercraft.svg);
         background-repeat: no-repeat;
         position: absolute;
         top: 0;
         left: 50%;
         transform: translate(-50%, -50%);
         height: 56px;
         width: 56px;
      }

      .top__header .top__header__cta {
         display: flex;
         justify-content: center;
         align-items: center;
      }

      .top__header button span {
         display: none;
      }

      .top__header button {
         border-radius: 30px;
      }

      .top__header button:first-of-type {
         font-size: .9rem;
         /* padding: 1.2rem 2rem; */
         padding: 1.2rem 0;
         width: 55vw;
         max-width: 204px;
      }

      .top__header button:last-of-type {
         padding: 0;
         border-radius: 50%;
         background-color: transparent;
         height: 56px;
         margin-left: 10px;
      }

      .top__header button:last-of-type:active {
         transform: scale(1.1);
      }

      .top__header button:last-child svg {
         transition: all .5s;
      }

      .top__header button:last-child:hover svg g circle {
         fill: #707070;
      }

      .top__header button:last-child:hover svg g path {
         fill: #B1B1B1;
      }

      .top__header button:last-of-type svg g circle,
      .top__header button:last-of-type svg g path {
         transition: fill .3s;
      }

      .top__header button:last-of-type:hover span {
         color: #707070;
      }





      /* bot header  */

      .bottom__header p strong {
         display: block;
         font-size: 2rem;
      }

      .bottom__header p {
         margin: 15px auto;
      }

      .bottom__header p:nth-of-type(2) {
         border-top: 1px solid lightgray;
         border-bottom: 1px solid lightgray;
         max-width: 85px;
         margin: 0 auto;
         padding: 19px 0;
      }

      .bottom__header progress {
         appearance: none;

         width: 100%;
         height: 12px;
         margin: 1rem auto 0 auto;
      }

      .bottom__header progress::-webkit-progress-value {
         background-color: var(--Primary-Moderate-Cyan);
         border-radius: 25px;
         width: 100%;
         transform-origin: left;
         transform: scaleX(0.9);
      }

      .bottom__header progress::-webkit-progress-bar {
         background-color: hsl(0, 0%, 95%);
         border-radius: 25px;
      }

      /* about  */

      .about h2 {
         margin-top: 0;
      }

      .about p {
         margin: 30px auto;
      }

      /* promotional rewards  */

      .rewards__cards {
         border: 1px solid rgba(0, 0, 0, 0.15);
         padding: 23px;
         margin-bottom: 25px;
         border-radius: 10px;
         position: relative;
         overflow: hidden;
      }

      .rewards__cards h3 {
         margin-bottom: 5px;
      }

      .rewards__cards p {
         margin: 23px 0;
      }

      .promotional__rewards .rewards__cards p:first-of-type {
         margin: 0;
         font-weight: 500;
         color: var(--Primary-Moderate-Cyan);
      }

      .about .rewards__cards p:last-of-type {
         display: flex;
         flex-direction: row;
         align-content: center;
         align-items: center;
      }

      .rewards__cards p strong {
         font-size: 2rem;
         margin-right: 10px;
      }

      .rewards__cards.outofstock .reward__outofstock {
         display: block;
         position: absolute;
         top: 0;
         left: 0;
         background-color: white;
         opacity: .6;
         height: 100%;
         width: 100%;
         padding: 0;
      }

      /* rewards  */

      .rewards {
         display: block;
         position: absolute;
         left: 0;
         top: 0;
         background-color: rgba(0, 0, 0, 0.527);
         padding: 95px 23px;
         z-index: 3;
         height: 100%;
         width: 100%;
      }

      .rewards__header {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }

      .rewards__header h2 {
         margin: 0;
      }

      .rewards__header .modal__checkbox {
         display: none;
      }

      .rewards__header span {
         background-image: url(../../assets/icon-close-modal.svg);
         background-repeat: no-repeat;
         height: 14px;
         width: 14px;
         cursor: pointer;
      }

      .rewards__header span:hover,
      .rewards__header span:focus {
         transform: scale(1.1);
      }

      .rewards__form .rewards__fieldset {
         border: none;
         margin: 0;
         padding: 0;
      }

      .modal {
         padding: 23px 0;
         cursor: pointer;
         outline: none;
      }

      .modal.outofstock:focus-visible {
         outline: 2px dashed var(--Primary-Moderate-Cyan);
         outline-offset: 4px;
      }

      .modal__top {
         padding: 0 23px;
      }

      .modal .modal__radio__container {
         display: flex;
         align-content: center;
         align-items: center;
      }

      .modal .modal__radio__container .custom__radio__btn {
         margin: 0 10px 0 0;
         height: 24px;
         width: 24px;
         border: 1px solid rgba(0, 0, 0, 0.15);
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;
      }

      .modal__radio__container .custom__radio__btn .checkmark {
         width: calc(100% - 10px);
         height: calc(100% - 10px);
         border-radius: 50%;
         background-color: var(--Primary-Moderate-Cyan);
         opacity: 0;
         transition: opacity .5s ease;
      }

      .modal__radio__container input {
         display: none;
      }

      .modal__radio__container input:checked+.checkmark {
         opacity: 1;
      }

      .modal__radio__container__left {
         cursor: pointer;
      }

      .modal__radio__container__left span {
         font-size: .9rem;
         font-weight: 600;
      }

      .modal__radio__container__left span:hover {
         color: var(--Primary-Moderate-Cyan);
      }

      .modal__radio__container__left span+span {
         display: block;
         margin: 5px auto;
         color: var(--Primary-Moderate-Cyan);
         font-weight: 500;
      }

      .modal__radio__container__left span:hover+span {
         font-weight: 600;
      }

      .modal__top p:last-of-type {
         font-size: 15px;
      }

      .modal__top p strong {
         font-size: 1.2rem;
         margin-right: 7px;
      }

      .modal__cta__container {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         border-top: 1px solid rgba(0, 0, 0, 0.15);
         /* padding: 0 23px; */
      }

      .modal__cta {
         display: flex;
         flex-wrap: nowrap;
         align-content: center;
         justify-content: space-evenly;
         width: 50vw;
      }

      .modal__cta .cta__input__container {
         position: relative;
         margin-right: 15px;
      }

      .modal__cta .cta__input__container input {
         width: 6rem;
         padding: 1rem .7rem 1rem 2.4rem;
         outline: none;
         border: 1px solid rgba(0, 0, 0, 0.15);
         border-radius: 35px;
         font-weight: 600;
         font-family: 'Commissioner', sans-serif;
      }

      .modal__cta .cta__input__container input:focus-visible {
         border: 1px solid var(--Primary-Moderate-Cyan);
      }

      .cta__input__container label {
         display: block;
         position: absolute;
         top: 17px;
         left: 1.5rem;
         color: rgba(0, 0, 0, .4);
         font-weight: 700;
         font-size: 14px;
         font-family: 'Commissioner', sans-serif;
      }

      .modal__cta button {
         padding: 1rem 1.9rem;
      }

      .modal__cta__container span {
         font-size: 14px;
         margin-top: 1rem;
         font-style: italic;
         color: red;
         padding: 0 23px;
         display: none;
      }

      /* success msg */

      .success__msg {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         display: none;
         max-width: 540px;
      }

      .success__msg .success__text__container {
         text-align: center;
         font-size: 19px;
      }

      .success__msg .success__btn__container {
         margin-top: 1rem;
      }



      /* footer  */

      .attribution,
      .attribution p {
         font-size: 11px;
         text-align: center;
         position: absolute;
         width: 100%;
         bottom: 0;
      }

      /* action styles  */

      .bookmarked__circle--fill {
         fill: #147b74;
         transition: fill .3s;
      }

      .bookmarked__path--fill {
         fill: white;
         transition: fill .3s;
      }

      .top__header button:last-of-type .bookmarked__span--color {
         color: var(--Primary-Dark-Cyan);
      }

      .reward__modal--hide {
         display: none;
      }

      .modal--selected {
         border: 2px solid var(--Primary-Moderate-Cyan);
      }

      .modal__cta--hide {
         display: none;
      }

      .modal__cta .cta__input__container .input--invalid {
         border: 1px solid red;
      }

      .modal__cta__container .input__message--invalid {
         color: red;
      }

      .outofstock .modal__outofstock {
         background-color: white;
         opacity: 0.5;
         position: absolute;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         cursor: default;
      }

      .success__msg--active {
         display: flex;
         position: fixed;
         transform: translate(-50%, -50%);
         left: 50%;
         top: 50%;
         width: 83.5vw;
      }

      .scrolling--disabled {
         height: 100%;
         overflow: hidden;
      }


      @media screen and (max-width: 350px) {

         .top__header .top__header__cta {
            flex-direction: column-reverse;
         }

         .top__header button {
            margin: 10px 0;
         }

         .top__header button:last-of-type {
            background-color: var(--Primary-Moderate-Cyan);
            display: flex;
            justify-content: start;
            align-items: center;
            border-radius: 30px;
            background-color: rgba(0, 0, 0, 0.15);
            width: 53vw;
            margin: 10px;
            transition: none;
         }

         .top__header button:last-of-type svg {
            margin-right: 15px;
         }

         .top__header button:last-of-type span {
            display: inline-block;
            color: rgb(82 80 80);
            font-weight: 600;
            font-family: 'Commissioner';
            font-size: .9rem;
         }

         .modal__cta {
            flex-direction: column;
         }

         .modal__cta .cta__input__container {
            margin: 10px;
         }

         .modal__cta .cta__input__container input {
            width: 100%;
         }

         .modal__cta__container span {
            text-align: center;
         }

         .modal__cta button {
            margin: 10px;
         }

      }

      @media screen and (max-width: 320px) {

         article {
            margin: -85px .5rem;
         }

         .top__header button:last-of-type svg {
            margin-right: 3px;
         }

         .content__card {
            text-align: center;
            padding: 40px .5rem;
         }

         .rewards {
            padding: 95px .5rem;
         }

         .about .rewards__cards p:last-of-type {
            justify-content: center;
         }

         .modal .modal__radio__container {
            flex-direction: column;
         }

         .modal .modal__radio__container .custom__radio__btn {
            margin: 10px;
         }
      }

      @media screen and (min-width: 750px) {

         header.masthead {
            background-position: center;
         }

         .content__card {
            max-width: 730px;
         }

         .top__header .top__header__cta {
            justify-content: space-between;
            width: 70%;
            margin: 0 auto;
         }

         .top__header button:last-of-type {
            border-radius: 30px;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 173px;
            max-width: 173px;
         }

         .top__header button span {
            display: unset;
            margin-left: 10px;
            color: #707070;
            font-weight: 600;
            font-family: 'Commissioner';
            font-size: .9rem;
         }

         .bottom__header .bottom__header__highlights {
            display: flex;
            justify-content: start;
            align-items: center;
            padding: 0 30px;
         }

         .bottom__header p {
            margin: 0;
            margin-right: 40px;
         }

         .bottom__header p:nth-of-type(2) {
            margin: 0;
            margin-right: 40px;
            padding: 0 90px 0 45px;
            border: none;
            max-width: none;
            border-right: 1px solid lightgray;
            border-left: 1px solid lightgray;
         }

         .bottom__header progress {
            padding: 0 30px;
         }

         .rewards__cards {
            display: grid;
            grid-template-areas:
               "title . subtitle"
               "text text text"
               "stock . button";
            justify-items: center;
            align-items: center;
            padding: 30px;
         }

         .rewards__cards h3 {
            grid-area: title;
            justify-self: start;
            margin: 0;
         }

         .promotional__rewards .rewards__cards p:first-of-type {
            grid-area: subtitle;
            justify-self: end;
            font-size: .9rem;
         }

         .rewards__cards p:nth-of-type(2) {
            grid-area: text;
            text-align: justify;
         }

         .about .rewards__cards p:last-of-type {
            grid-area: stock;
            justify-self: start;
            margin: 0;
         }

         .rewards__cards button {
            grid-area: button;
            justify-self: end;
         }


         /* modal 750 */

         .rewards {
            width: 100%;
         }

         .rewards .rewards__cards {
            display: flex;
            flex-direction: column;
            padding: 30px 0 20px 0;
            max-width: 640px;
         }

         .modal__top {
            display: grid;
            grid-template-columns: 39px repeat(2, 1fr);
            grid-template-areas:
               "radioandspans radioandspans radioandspans . stocks"
               ". text text text text";
            justify-content: center;
            align-items: center;
            padding: 0 25px;
         }

         .modal .modal__radio__container {
            grid-area: radioandspans;
         }

         .modal .modal__radio__container .custom__radio__btn {
            margin: 0 15px 0 0;
         }

         .modal__radio__container__left {
            display: flex;
            justify-content: center;
            align-items: center;
         }

         .modal__radio__container__left span:last-of-type {
            margin: 0;
         }

         .modal__radio__container__left span:first-of-type {
            margin-right: 20px;
         }

         .rewards .rewards__cards p {
            grid-area: text;
            margin: 20px 0;
            width: 100%;
         }

         .rewards .rewards__cards p:nth-of-type(2) {
            grid-area: stocks;
            margin: 0;
         }

         .modal__cta__container {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            padding: 20px 25px 0 40px;
            position: relative;
         }

         .modal__cta {
            justify-content: flex-end;
         }

         .success__msg {
            max-width: 540px;
         }

      }

      @media screen and (min-width: 850px) {

         h1 {
            font-size: 1.7rem;
            margin: 1rem auto 0 auto;
         }

         h2 {
            font-size: 1.3rem;
         }

         h3 {
            font-size: 1.2rem;
         }

         p {
            font-size: 1rem;
            margin: 13px auto;
         }

         article {
            margin: -120px 1.5rem;
         }

         header.masthead {
            height: 400px;
            background-position: bottom;
            background-image: url(../../assets/image-hero-desktop.jpg);
            padding: 2rem 2.82353vw;
         }

         header.masthead .nav__burger {
            display: none;
         }


         header.masthead ul {
            margin: 0;
            position: relative;
            background-color: unset;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: auto;
            opacity: 1;
            transition: none;
         }

         header.masthead .nav__checkbox:checked~ul {
            height: auto;
         }

         header.masthead ul>li,
         header.masthead ul>li:hover {
            border: unset;
         }

         header.masthead ul a {
            display: block;
            color: white;
            font-weight: 400;
            padding: 0;
            margin: 0 10px 0 32px;
            font-size: 0.83rem;
            transition: none;
         }

         header.masthead ul a:hover,
         header.masthead ul a:focus {
            background-color: unset;
            text-decoration: underline;
         }

         header.masthead ul a:focus-visible {
            transform: scale(1.1);
         }

         .top__header button:first-of-type {
            font-size: 15px;
            padding: 1.17rem 0;
         }

         .top__header .top__header__cta {
            margin: 35px auto 7px auto;
         }

         .bottom__header .bottom__header__highlights {
            padding: 3px 30px;
         }

         .bottom__header p {
            line-height: 1.55;
         }

         .bottom__header progress {
            margin: 30px auto 10px auto;
         }

         .about {
            padding: 50px 45px;
         }

         .about p {
            margin: 37px auto;
            line-height: 1.875;
         }

         .rewards__cards p {
            margin: 25px auto 14px auto;
         }

         .rewards .content__card {
            padding: 50px 45px;
         }

         .rewards h2 {
            font-size: 1.5rem;
            margin: 0px 0 3px 0;
         }

         .rewards p {
            margin: 13px auto 34px auto;
         }

         .modal__top {
            padding: 0 15px;
         }

         .modal__radio__container__left span:first-of-type {
            font-size: 1rem;
         }

         .rewards .modal p {
            margin: 15px 0 12px 0;
         }

         .modal__cta .cta__input__container input {
            padding: .93rem .7rem .93rem 2.4rem;
         }

         .cta__input__container label {
            top: 15px;
         }

         .modal__cta button {
            padding: .9rem 1.5rem;
         }


         .success__msg img {
            width: 90px;
            height: 90px;
         }

         .success__msg p {
            margin-top: 40px;
            margin-bottom: 0;
         }

         .success__msg p strong {
            font-size: 1.5rem;
         }

         .success__msg p:nth-of-type(2) {
            margin-top: 10px;
         }

         .success__msg button {
            align-self: center;
            margin-top: 10px;
         }

         /* action styles  */

         .scrolling--disabled {
            height: unset;
            overflow: unset;
         }

      }

      @media screen and (min-width: 950px) {
         header.masthead {
            padding: 2rem 5.82353vw;
         }
      }

      @media screen and (min-width:1200px) {
         header.masthead {
            padding: 2rem 11.3889vw;
         }
      }

      @media screen and (min-width: 1440px) {
         header.masthead nav {
            max-width: 1112px;
            margin: 0 auto;
         }

      }


   `;
   
   script.parentNode.insertBefore(styles, script);

}
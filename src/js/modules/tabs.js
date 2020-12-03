'use strict';


 const tabs = (headSelector, tabSelector, contentSelector, activeClass) => {

     const header = document.querySelector(headSelector);
     const tab = document.querySelectorAll(tabSelector);
     const content = document.querySelectorAll(contentSelector);

     function hideTabContent() {

         content.forEach(item => {
             item.style.display = 'none';
         });

         tab.forEach(item => {
             item.classList.remove(activeClass);
         })
     }

     function showTabContent(i = 0) {

         content[i].style.display = 'block';

         tab[i].classList.add(activeClass);

     }


     hideTabContent();
     showTabContent();


     header.addEventListener('click', (e) => {  // обработчик навешивается на всю область клика

         const target = e.target;

         if (target &&
             (target.classList.contains(tabSelector.replace(/\./, '')) ||
              target.parentNode.classList.contains((tabSelector.replace(/\./, ''))))){

             tab.forEach((item, index) => {
                 if (target === item || target.parentNode === item){
                     hideTabContent();
                     showTabContent(index);
                 }
             })

         }

     })

 };

























export default tabs;






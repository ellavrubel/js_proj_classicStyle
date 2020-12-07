'use strict';

// функция для всех модальных окон

const modals = () => {
    
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) { // триггер - кнопка; само модальное окно и триггер для его закрытия

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const openWindows = document.querySelectorAll('[data-modal]');



        trigger.forEach(item => {  // forEach возможен только при querySelectorAll и на каждый элемент массива с одинаковыми классами будет навешан обработ событий

            item.addEventListener('click', (e) => {  // e - event, например не кнопка, а ссылка, кот перезагрузит страницу, а нам это не нужно
                if (e.target){
                    e.preventDefault();
                }

                // закрытие всех открытых модальных окон на странице
                openWindows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // при открытом модальном окне страница сайта будет замораживаться
                // document.body.classList.add('modal-open'); // т.к. в проекте есть Bootstrap
            });

        });

        close.addEventListener('click', () => {

            // закрытие всех открытых модальных окон на странице
            openWindows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');

        });

        modal.addEventListener('click', (e) => {

            if (e.target === modal && closeClickOverlay){

                // закрытие всех открытых модальных окон на странице
                openWindows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }

        })

    }

    function showModalByTime (selector, time){
        setTimeout(() => {

            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';

        }, time)
    }



    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

};







export default modals;
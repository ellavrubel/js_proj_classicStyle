

// функция для всех модальных окон

const modals = () => {
    
    function bindModal(triggerSelector, modalSelector, closeSelector) { // триггер - кнопка; само модальное окно и триггер для его закрытия

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);



        trigger.forEach(item => {  // forEach возможен только при querySelectorAll и на каждый элемент массива с одинаковыми классами будет навешан обработ событий

            item.addEventListener('click', (e) => {  // e - event, например не кнопка, а ссылка, кот перезагрузит страницу, а нам это не нужно
                if (e.target){
                    e.preventDefault();
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // при открытом модальном окне страница сайта будет замораживаться
                // document.body.classList.add('modal-open'); // т.к. в проекте есть Bootstrap
            });

        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');

        });

        modal.addEventListener('click', (e) => {

            if (e.target === modal){
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
    showModalByTime('.popup', 60000);

};







export default modals;
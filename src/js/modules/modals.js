

// функция для всех модальных окон
const modals = () => {
    
    function bindModal(trigger, modal, close) { // триггер - кнопка; само модальное окно и триггер для его закрытия

        trigger.addEventListener('click', (e) => {  // e - event, например не кнопка, а ссылка, кот перезагрузит страницу, а нам это не нужно
            if (e.target){
                e.preventDefault();
            }

            modal.style.display = 'block';
            // document.body.style.overflow = 'hidden'; // при открытом модальном окне страница сайта будет замораживаться
            document.body.classList.add('modal-open');
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');

        });

        modal.addEventListener('click', (e) => {

            if (e.target === modal){
                modal.style.display = 'none';
                // document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
            }

        })



    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn');
    const modalEngineer = document.querySelector('.popup_engineer');
    const modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);

};







export default modals;
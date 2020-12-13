

const noEmptyFields = (btn) => {

    const requiredFields = document.querySelectorAll('[data-validation]').values();
    const modalBtn = document.querySelector(btn);

    modalBtn.addEventListener('click', (e) => {
        e.preventDefault();

        console.log(requiredFields);


        // if (requiredFields === ''){
        //     // alert('Пожалуйста, заполните все поля формы.')
        // }




    })



};



export default noEmptyFields;
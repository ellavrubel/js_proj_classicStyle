
const checkNumInputs = (selector) => {

    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach(item => {
        item.addEventListener('input', () => {  // event 'input' срабатывает когда пользователь что-то вводит/пишет
            item.value = item.value.replace(/\D/, '');  // /\D/ - все, что не является числом будет заменено пустым местом
        })

    });

};


export default checkNumInputs;
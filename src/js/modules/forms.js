

const forms = () => {

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('input[name = "user_name"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {  // event 'input' срабатывает когда пользователь что-то вводит/пишет
            item.value = item.value.replace(/\D/, '');  // /\D/ - все, что не является числом будет заменено пустым местом
        })

    });

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Специалист службы поддержки свяжется с вами в ближайшее время.',
        failure: 'Что-то пошло не так, попробуйте отправить данные позднее.'
    };



    // отправка запроса на сервер
    const postData = async (url, data) => {    // url - адрес сервера, куда отправляется data

        document.querySelector('.status').textContent = message.loading;  // вставка теста в сообщение

        let res = await fetch(url, {  // await дает понять js, что надо дождаться окончания операции, перед кот он стоит
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    // очистка всех inputs после отправки данных на сервер
        const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    };


    // перебор всех форм, сбор данных и их отправка на сервер, очистка форм и удаление div с сообщением
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();   // неотъемлемая часть ajax запросов - отмена стандартного поведения браузера

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData (item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = statusMessage.success;
                })
                .catch(() => statusMessage.textContent = statusMessage.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                })
        })
    });

};




export default forms;
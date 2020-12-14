


const timer = (id, deadline) => {

//    для двучислового отображение на странице
    const addZero = (num) => {
        if (num <=9){

            return '0' + num;
        } else {

            return num;
        }
    };

    // получаем разницу между окончанием и настоящей датой  - то, что нужно вставить на страницу

    const getTimeRemaining = (endTime) => {   // по факту это deadline
        const t = Date.parse(endTime) - Date.parse(new Date());   // количество милисекунд - то, что нужно отобразить на странице
        const seconds = Math.floor((t/1000) % 60);  // % 60 - хвост от деления, кот отображается в виде уменьшающихся цифр на сайте
        const minutes = Math.floor((t/1000/60) % 60);
        const hours = Math.floor((t/(1000*60*60)) % 24);
        const days = Math.floor(t/(1000*60*60*24));


        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    };


    //  помещаем 'живые' цифры в определенное место верстки (страницы)

    const setClock = (selector, endTime) => {    // selector - место в HTML
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

     updateClock();  // вызываем единожды вручную, чтобы на странице не отображалась статическая верстка (т.к стр45 запустится только через 1с)

        // помещаем эту функцию внутрь, т.к. нужен доступ к переменной timeInterval, чтобы остановить таймер и остальным переменным
        function updateClock(){
            const t = getTimeRemaining(endTime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);


            if(t.total <= 0){
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    };



    setClock(id, deadline);

};





















export default timer;
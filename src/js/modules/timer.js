


const timer = (id, deadline) => {

    const getTimeRemaining = (endTime) => {   // по факту это deadline
        const t = Date.parse(endTime) - Date.parse(new Date());  // получаем разницу между окончанием и настоящей датой - количество милисекунд - то, что нужно отобразить на странице
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


    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);



    }



};





















export default timer;
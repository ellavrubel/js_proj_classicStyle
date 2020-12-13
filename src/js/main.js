import './slider';
import './wow';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';




window.addEventListener('DOMContentLoaded', () => {   // скрипты выполняются только после загрузки всей страницы сайта

    'use strict';

    // создание объекта, в кот помещаются все данные из калькулятора
    let modalState = {};

    // вызов импортируемых функций
    changeModalState(modalState);

    modals();

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

    forms(modalState);

});
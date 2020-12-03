import './slider';
import './wow';
import modals from './modules/modals';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {   // скрипты выполняются только после загрузки всей страницы сайта

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');


});
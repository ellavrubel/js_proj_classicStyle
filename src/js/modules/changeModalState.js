
import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');  // псевдомассив, даже если один элемент, то будет применяться метод forEach
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');
    const popupCalcBtn = document.querySelector('.popup_calc_profile_button');

    checkNumInputs('#width');
    checkNumInputs('#height');



    function bindActionToElems (event, elem, prop){

        elem.forEach((item, i) => {

            item.addEventListener(event, () => {
               switch (item.nodeName) {
                   case 'SPAN':   // свойство nodeName возвращает название узла в верхнем регистре
                           state[prop] = i;
                           break;

                   case 'INPUT':
                       if(item.getAttribute('type') === 'checkbox'){
                           i === 0 ? state[prop] = 'холодное' : state[prop] = 'теплое';
                           elem.forEach((box, j) => {   // оставляем галочку только на выбранном checkbox
                               box.checked = i === j;
                           })
                       } else {
                           state[prop] = item.value;
                       }
                       break;

                   case 'SELECT':
                       state[prop] = item.value;
                       break;
               }

               console.log(state);
            })
        });
    }


    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');









};




export default changeModalState;
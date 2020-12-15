

const images = () => {

    const imagePopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');

    imagePopup.classList.add('popup');
    workSection.appendChild(imagePopup);  // чтобы div отобразился на странице

    imagePopup.style.justifyContent = 'center';
    imagePopup.style.alignItems = 'center';
    imagePopup.style.display = 'none';
    imagePopup.style.backgroundColor = 'rgba(8,8,8,0.78)';

    bigImage.style.maxWidth = '100%';
    bigImage.style.height = 'auto';


    imagePopup.appendChild(bigImage); // помещаем увеличенное изображение в модальное окно

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

    //    делегирование
        if (target && target.classList.contains('preview')){
            imagePopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

    //    закрытие окна при клике на подложку
        if (target && target.matches('div.popup')){
            imagePopup.style.display = 'none';
            document.body.style.overflow = '';
        }

    })
};







export default images;
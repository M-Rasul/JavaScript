'use strict';
const yonkers = {
    city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    address: '511 Warburton Ave'
}
const canandaigua = {
    city: 'Canandaigua, NY',
    phone: '+1 585 393 0001',
    address: '151 Charlotte Street'
}
const sherrill = {
    city: 'Sherrill, NY',
    phone: '+1 315 908 0004',
    address: '14 WEST Noyes BLVD'
}
const nycity = {
    city: 'New York City',
    phone: '+1 212 456 0002',
    address: '9 East 91st Street'
}
const citiesArr = [yonkers, canandaigua, sherrill, nycity];
const learnBtn = document.querySelector('.learn');
const aboutSection = document.querySelector('.about');
const nav = document.querySelectorAll('nav');
const serviceBtnsContainer = document.querySelector('.btns');
const serviceBtns = document.querySelectorAll('.service-btn');
const serviceItems = document.querySelectorAll('.service_item');
const pricesContainer = document.querySelector('.prices_items');
const pricesItems = document.querySelectorAll('.prices_item');
const accordeons = document.querySelectorAll('.accordeon');
const pricingContainers = document.querySelectorAll('.pricing');
const contactUsBtn = document.querySelector('.contactUs'); 
const contactsSection = document.querySelector('.contacts');
const dropdownCities = document.querySelector('.dropdown');
const accordeonsCity = document.querySelectorAll('.accordeonCity');
const citiesBlock = document.querySelector('.cities');
const citiesWrapper = document.querySelector('.citiesWrapper');
const cityTag = document.querySelector('.city');
const cityName = document.querySelector('.cityName');
const phone = document.querySelector('.phone');
const address = document.querySelector('.address');
const choiceBox = document.querySelector('.chosen');
const callUsBtn = document.querySelector('.call-us');
contactUsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    contactsSection.scrollIntoView({behavior: 'smooth'});
})
callUsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(`tel:${phone.innerHTML.replaceAll(' ', '')}`);
})
citiesWrapper.addEventListener('click', function(e) {
    e.preventDefault();
    const el = e.target;
    if(el.classList.contains('choice')) {
        const chosen = citiesArr.find(city => city.city === el.innerHTML);
        cityTag.innerHTML = chosen.city;
        cityName.innerHTML = chosen.city;
        phone.innerHTML = chosen.phone;
        address.innerHTML = chosen.address;
        accordeonsCity.forEach(acc => acc.classList.contains('closed') ? acc.classList.remove('hidden') : acc.classList.add('hidden'));
        citiesBlock.classList.add('hidden');
        choiceBox.classList.remove('hidden');
    }
})
dropdownCities.addEventListener('click', function(e) {
    e.preventDefault();
    const el = e.target.classList.contains('accordeonCity') ? e.target : e.target.parentNode;
    if(el.classList.contains('accordeonCity')) {
        choiceBox.classList.add('hidden');
        dropdownCities.classList.add('active');
        accordeonsCity.forEach(acc => acc.classList.contains('closed') ? acc.classList.add('hidden') : acc.classList.remove('hidden'));
        citiesBlock.classList.remove('hidden');
    }
})
pricesContainer.addEventListener('click', function(e) {
    e.preventDefault();
    const el = e.target;
    if(el.classList.contains('order')) {
        contactsSection.scrollIntoView({behavior: 'smooth'});
    }
})                                     
const crossBtn = document.querySelector('.cross');
const burgerBtn = document.querySelector('.burger');
const panel = document.querySelector('.panel');
const overlays = document.querySelectorAll('.overlay');
const closeNav = function() {
    panel.classList.add('hidden');
}
overlays.forEach(o => o.addEventListener('click', closeNav));
burgerBtn.addEventListener('click', function() {
    panel.classList.remove('hidden');
})
crossBtn.addEventListener('click', closeNav);
pricesContainer.addEventListener('click', function(e) {
    e.preventDefault();
    const el = e.target.classList.contains('accordeon') ? e.target : e.target.parentNode;
    if(el.classList.contains('accordeon')) {
        if(el.classList.contains('open')) {
            document.querySelector(`.item-${el.dataset.tab}`).classList.remove('active');
            el.classList.add('hidden');
            const accs = document.querySelectorAll(`.accordeon-${el.dataset.tab}`);
            accs.forEach(acc => acc.classList.contains('closed') ? acc.classList.remove('hidden') : null);
            document.querySelector(`.pricing-${el.dataset.tab}`).classList.add('hidden');
        } else {
            pricesItems.forEach(item => item.classList.remove('active'));
            document.querySelector(`.item-${el.dataset.tab}`).classList.add('active');
            accordeons.forEach(acc => acc.classList.contains('open') ? acc.classList.add('hidden') : acc.classList.remove('hidden'));
            const accs = document.querySelectorAll(`.accordeon-${el.dataset.tab}`);
            accs.forEach(acc => acc.classList.contains('open') ? acc.classList.remove('hidden') : acc.classList.add('hidden'));
            pricingContainers.forEach(container => container.classList.add('hidden'));
            setTimeout(function() {document.querySelector(`.pricing-${el.dataset.tab}`).classList.remove('hidden');}, 500);
        }
    }
})
serviceBtnsContainer.addEventListener('click', function(e) {
    e.preventDefault();
    const el = e.target;
    if(el.classList.contains('service-btn')) {
        const id = el.getAttribute('id');
        if(serviceBtnsContainer.querySelectorAll('.hover').length === 2) return;
        el.classList.add('hover');
        serviceItems.forEach(item => {
            if(serviceBtnsContainer.querySelectorAll('.hover').length === 2)  {
                if(item.classList.contains(id)) {
                    item.classList.remove('blur');
                }
            } else {
                item.classList.add('blur');
            }
            if(item.classList.contains(id)) {
                item.classList.remove('blur');
            }
    });
    }
})
nav.forEach(n => {
    n.addEventListener('click', function(e) {
        e.preventDefault();
        const el = e.target;
        if(el.classList.contains('nav-item')) {
            const id = el.getAttribute('href');
            document.querySelector(id).scrollIntoView({behavior: 'smooth'});
            closeNav();
        }
    })
})
learnBtn.addEventListener('mouseover', function() {
    learnBtn.classList.remove('unactive');
    learnBtn.classList.add('hover');
})
learnBtn.addEventListener('mouseout', function() {
    learnBtn.classList.remove('hover');
    learnBtn.classList.add('unactive');
})
learnBtn.addEventListener('click', function() {
    aboutSection.scrollIntoView({behavior: 'smooth'});
})
console.log(`Ваша оценка - 100 баллов
Отзыв по пунктам ТЗ:
Выполненные пункты:
1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной 

2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг 

3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur 

4) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым 

5) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается 

6) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе 

7) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу 

`); 

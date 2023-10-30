import './style.css';

import { makeBodyElements } from './page';
makeBodyElements();

const content = document.querySelector('#content');
const contentArr = [...content.querySelectorAll('main')];
const buttons = [...content.querySelectorAll('header > div > div')];
const bgc = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');

function pageLoadDisplay () {
    buttons[0].setAttribute('style', `background-color: ${bgc}`)
    contentArr[0].classList.remove('no-display');
    contentArr[1].classList.add('no-display');
    contentArr[2].classList.add('no-display');
}
pageLoadDisplay();

content.addEventListener('click', (e) => {
   const elem = e.target;
   const elemText = elem.innerHTML;
   if (elemText === 'HOME') {
        buttons[0].setAttribute('style', `background-color: ${bgc}`);
        buttons[1].removeAttribute('style');
        buttons[2].removeAttribute('style');
        contentArr[0].classList.remove('no-display');
        contentArr[1].classList.add('no-display');
        contentArr[2].classList.add('no-display');
    } else if (elemText === 'MENU') {
        buttons[1].setAttribute('style', `background-color: ${bgc}`);
        buttons[0].removeAttribute('style');
        buttons[2].removeAttribute('style');
        contentArr[0].classList.add('no-display');
        contentArr[1].classList.remove('no-display');
        contentArr[2].classList.add('no-display');

    } else if (elemText === 'CONTACT') {
        buttons[2].setAttribute('style', `background-color: ${bgc}`);
        buttons[1].removeAttribute('style');
        buttons[0].removeAttribute('style');
        contentArr[0].classList.add('no-display');
        contentArr[1].classList.add('no-display');
        contentArr[2].classList.remove('no-display');
    } else return;
})
import Beef_Stew from './img/beef-stew.jpg';
import white_Rice from './img/white-rice0.jpg';
import egusi_soup from './img/egusi-soup.jpg';
import fried_chicken from './img/fried-chicken.jpg';
import okra_soup from './img/okra-soup.jpg';

export function makeMenuElements () {
    const main = document.createElement('main');
    main.classList.add('menu-items');

    const pl1 = document.createElement('div');
    const img1 = document.createElement('img');
    const disc1 = document.createElement('p');
    img1.src = Beef_Stew;
    img1.alt = 'beef-stew';
    disc1.innerHTML = 'Nigerian Beef Stew';
    pl1.append(img1, disc1);

    const pl2 = document.createElement('div');
    const img2 = document.createElement('img');
    const disc2 = document.createElement('p');
    img2.src = egusi_soup;
    img2.alt = 'egusi-soup';
    disc2.innerHTML = 'Nigerian Egusi Soup';
    pl2.append(img2, disc2);

    const pl3 = document.createElement('div');
    const img3 = document.createElement('img');
    const disc3 = document.createElement('p');
    img3.src = fried_chicken;
    img3.alt = 'fried-chicken';
    disc3.innerHTML = 'Fried Chicken';
    pl3.append(img3, disc3);

    const pl4 = document.createElement('div');
    const img4 = document.createElement('img');
    const disc4 = document.createElement('p');
    img4.src = okra_soup;
    img4.alt = 'okra-soup';
    disc4.innerHTML = 'Nigerian Okra Soup';
    pl4.append(img4, disc4);

    const pl5 = document.createElement('div');
    const img5 = document.createElement('img');
    const disc5 = document.createElement('p');
    img5.src = white_Rice;
    img5.alt = 'white-rice-and-chicken-soup';
    disc5.innerHTML = 'Nigerian White Rice and Chicken Soup';
    pl5.append(img5, disc5);


    main.append(pl1, pl2, pl3, pl4, pl5);

    return main;
}
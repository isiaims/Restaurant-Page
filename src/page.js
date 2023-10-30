import { makeHomeElements } from './home';
import { makeMenuElements } from './menu';
import { makeContactElements } from './contact';

export function makeBodyElements () {
    const header = document.createElement('header');
    const div = document.createElement('div');
    const footer = document.createElement('footer');

    const siteName = document.createElement('h1');
    const buttonDiv = document.createElement('div');

    siteName.innerHTML = 'uRestaurant';

    const homeButton = document.createElement('div');
    const menuButton = document.createElement('div');
    const contactButton = document.createElement('div');

    homeButton.innerHTML = 'HOME';
    menuButton.innerHTML = 'MENU';
    contactButton.innerHTML = 'CONTACT';

    buttonDiv.append(homeButton, menuButton, contactButton);

    header.append(siteName, buttonDiv);

    div.append(makeHomeElements(), makeMenuElements(), makeContactElements());

    const nameDiv = document.createElement('div');
    const crDiv1 = document.createElement('div');
    const crDiv2 = document.createElement('div');

    nameDiv.innerHTML = `&copy;AimsDev`;

    const crlink = document.createElement('a');
    const crlink1 = document.createElement('a');
    const crlink2 = document.createElement('a');
    const crlink3 = document.createElement('a');

    crlink.href = "https://www.freepik.com/free-photo/top-view-vegetable-soup-with-meat-inside-plate-grey_10724750.htm#query=nigerian%20food&position=0&from_view=keyword&track=ais";
    crlink.innerHTML = 'Image by KamranAydinov on Freepik';

    crlink1.href = "https://www.freepik.com/free-photo/dried-squid-baked-with-sweet-sour-sauce-asian-seafood-concept_8885190.htm#page=2&query=nigerian%20food&position=0&from_view=keyword&track=ais";
    crlink1.innerHTML = 'Image by jcomp on Freepik';

    crlink2.href = "https://www.freepik.com/free-photo/delicious-fried-chicken-plate_8167861.htm#page=2&query=nigerian%20food&position=2&from_view=keyword&track=ais";
    crlink2.innerHTML = 'Image by Racool_studio on Freepik';

    crlink3.href = "https://stock.adobe.com/ng/contributor/207827152/bassey?load_type=author&prev_url=detail";
    crlink3.innerHTML = 'Image by Bassey on Adobe Stock';

    crDiv1.append(crlink, crlink1);
    crDiv2.append(crlink2, crlink3);

    footer.append(nameDiv, crDiv1, crDiv2);

    document.getElementById('content').append(header, div, footer);
    return { homeButton, menuButton, contactButton };
};
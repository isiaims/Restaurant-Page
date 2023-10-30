export function makeHomeElements () {
    const main = document.createElement('main');
    const aboutDiv = document.createElement('div');
    const openDiv = document.createElement('div');
    const localDiv = document.createElement('div');

    const aboutH1 = document.createElement('h1');
    const aboutPara = document.createElement('p');

    aboutH1.innerHTML = 'About uRestaurant';
    aboutPara.innerHTML = '';
    aboutDiv.append(aboutH1, aboutPara);

    const openH2 = document.createElement('h2');
    const openParas = document.createElement('div');
    const openPara1 = document.createElement('p');
    const openPara2 = document.createElement('p');

    openH2.innerHTML = 'Open';
    openPara1.innerHTML = 'Weekdays: 7am - 8pm';
    openPara2.innerHTML = 'Weekend: 8am - 10pm';
    openParas.append(openPara1, openPara2)
    openDiv.append(openH2, openParas);


    const localH2 = document.createElement('h2');
    const localPara = document.createElement('p');

    localH2.innerHTML = 'Location';
    localPara.innerHTML = '12B Cole Ave, Cole World, Yourz';
    localDiv.append(localH2, localPara);

    main.append(aboutDiv, openDiv, localDiv);

    return main;
};
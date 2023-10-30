export function makeContactElements () {
    const main = document.createElement('main');
    const content = document.createElement('div');

    const contentTitle = document.createElement('h1');
    contentTitle.innerHTML = 'CONTACT US ON:';

    const contentDiv = document.createElement('div');

    const telh3 = document.createElement('h3');
    const tel0 = document.createElement('p');
    const tel1 = document.createElement('p');
    const tel2 = document.createElement('p');

    const soch3 = document.createElement('h3');
    const soc0 = document.createElement('p');
    const soc1 = document.createElement('p');
    const soc2 = document.createElement('p');

    contentDiv.append(telh3, tel0, tel1, tel2, soch3, soc0, soc1, soc2);
    content.append(contentTitle, contentDiv);
    main.append(content);

    return main;
}
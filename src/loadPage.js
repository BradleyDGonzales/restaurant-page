export default function loadPage() {
    const contentElement = document.getElementById('content');
    const headerElement = document.createElement('header');
    headerElement.classList.add('tabcontent');
    const paragraphElement = document.createElement('p');
    paragraphElement.setAttribute('id', 'restaurant-name');
    paragraphElement.textContent = "Shyantona Anime Bar and Grill"
    const listElement = document.createElement('li');
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'main')
    mainDiv.classList.add('tabcontent');
    const greetingDiv = document.createElement('div');
    greetingDiv.setAttribute('id', 'greeting');
    const visionTitle = document.createElement('div');
    visionTitle.setAttribute('id', 'vision-title');
    const visionElement = document.createElement('h3');
    visionElement.setAttribute('id', 'vision');
    visionElement.textContent = 'The Vision'
    const imgElement = document.createElement('img');
    imgElement.src = "../src/pictures/animefood.png";
    imgElement.width = "700";
    imgElement.height = "400";


    const visionParagraph = document.createElement('p');
    visionParagraph.setAttribute('id', 'about');
    visionParagraph.textContent =
        `Food is a universal language, people across the globe eat foods for varying reasons: eating to
    survive, grow your body, cope, etc.
    Whatever the reason may be, food is always much more enjoyable when you eat them accompanied by your
    loved ones.
    But wouldn't it be awesome to try out that one food you and your loved ones saw from a series?
    BEHOLD! Shyantona's Anime Bar and Grill! We aim to replicate the best looking foods from a variety
    of
    animes, but we mostly gain
    our inspiration from the anime "Food Wars". Don't worry, we do offer our most ordered dish: Ichiraku
    Ramen from Naruto! We also offer drinks and BYOB!`

    const servicesDiv = document.createElement('div');
    servicesDiv.setAttribute('id', 'services');

    const servicesParagraph = document.createElement('p');
    servicesParagraph.textContent = "Skip the line and order for pickup or delivery: "

    const footerElement = document.createElement('footer');
    footerElement.classList.add('tabcontent');
    footerElement.textContent = "All foods made by your favorite husband and wife: Bradley and Thiana (owners) with the help of their munchkins: Luciano and Titus!"

    contentElement.appendChild(headerElement);
    headerElement.appendChild(paragraphElement);
    headerElement.appendChild(listElement)

    for (let i = 0; i < 3; i++) {
        const ulistElement = document.createElement('ul');
        const anchorElement = document.createElement('a');
        listElement.appendChild(ulistElement);
        ulistElement.appendChild(anchorElement)
        if (i === 0) {
            anchorElement.textContent = 'Home'
            anchorElement.setAttribute('href', '')
        }
        else if (i === 1) {
            anchorElement.textContent = 'Menu'
            anchorElement.setAttribute('href', '')
        }
        else if (i === 2) {
            anchorElement.textContent = 'Contact'
            anchorElement.setAttribute('href', '')
        }
    }
    contentElement.appendChild(mainDiv);
    mainDiv.appendChild(greetingDiv);
    greetingDiv.appendChild(visionTitle);
    visionTitle.appendChild(visionElement);
    greetingDiv.appendChild(imgElement);
    greetingDiv.appendChild(visionParagraph);
    mainDiv.appendChild(servicesDiv);
    servicesDiv.appendChild(servicesParagraph);
    for (let i = 0; i < 4; i++) {
        const servicesImg = document.createElement('img');
        servicesImg.classList.add("deliveryservices");
        const anchorElement = document.createElement('a');
        servicesDiv.appendChild(anchorElement);
        anchorElement.appendChild(servicesImg);
        if (i === 0) {
            servicesImg.src = "../src/pictures/ubereats.png"
            servicesImg.width = "50";
            servicesImg.height = "50";
        }
        else if (i === 1) {
            servicesImg.src = "../src/pictures/postmates.png"
            servicesImg.width = "50";
            servicesImg.height = "50";
        }
        else if (i === 2) {
            servicesImg.src = "../src/pictures/grubhub.png"
            servicesImg.width = "75";
            servicesImg.height = "25";
        }
        else if (i === 3) {
            servicesImg.src = "../src/pictures/doordash.png"
            servicesImg.width = "50";
            servicesImg.height = "50";
        }
    }
    contentElement.appendChild(footerElement);

}
export default function loadContact() {
    const contentElement = document.getElementById('content');
    let child = contentElement.lastElementChild;
    while (child) {
        contentElement.removeChild(child);
        child = contentElement.lastElementChild;
    }
    const headerElement = document.createElement('header');
    headerElement.classList.add('tabcontent');
    const paragraphElement = document.createElement('p');
    paragraphElement.setAttribute('id', 'restaurant-name');
    paragraphElement.textContent = "Shyantona Anime Bar and Grill"
    const listElement = document.createElement('li');
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'maincontact')
    mainDiv.classList.add('tabcontent');
    const contactTitleContainer = document.createElement('div');
    contactTitleContainer.setAttribute('id', 'contact-title')
    const h3Element = document.createElement('h3')
    h3Element.textContent = "Contact"
    h3Element.id = "contact"
    const staffDiv = document.createElement('div');
    staffDiv.setAttribute('id', 'staff');

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
    mainDiv.appendChild(contactTitleContainer);
    contactTitleContainer.appendChild(h3Element);
    mainDiv.appendChild(staffDiv);
    for (let i = 0; i < 5; i++) {
        const staffImg = document.createElement('img');
        staffImg.classList.add("staffmembers");
        const imgCaption = document.createElement('p');
        const staffsContainer = document.createElement('div');
        const infoContainer = document.createElement('div');
        infoContainer.classList.add("infocontainer");
        const nameContainer = document.createElement('p');
        const phoneContainer = document.createElement('p');
        const emailContainer = document.createElement('p');
        staffsContainer.classList.add('staffsContainer');
        imgCaption.classList.add('imgcaption');
        staffDiv.appendChild(staffsContainer);
        staffsContainer.appendChild(staffImg);
        staffsContainer.appendChild(infoContainer);
        infoContainer.appendChild(nameContainer);
        infoContainer.appendChild(phoneContainer);
        infoContainer.appendChild(emailContainer);
        if (i === 0) {
            staffImg.src = "../src/pictures/mocha-bear-gumpy.png"
            staffImg.height = "200"
            staffImg.width = "300"
            nameContainer.textContent = "Bradley"
            phoneContainer.textContent = "Email: shyseus@gmail.com"
            emailContainer.textContent = "Phone: 201-293-2344"
        }
        else if (i === 1) {
            staffImg.src = "../src/pictures/milk.png"
            staffImg.height = "200"
            staffImg.width = "300"
            nameContainer.textContent = "Thiana"
            phoneContainer.textContent = "Email: tona0822@gmail.com"
            emailContainer.textContent = "Phone: 201-234-4293"
        }
        else if (i === 2) {
            staffImg.src = "../src/pictures/matcha-angry.png"
            staffImg.height = "200"
            staffImg.width = "300"
            nameContainer.textContent = "Titus"
            phoneContainer.textContent = "Email: titus_the_righteous@gmail.com"
            emailContainer.textContent = "Phone: 231-992-8131"
        }
        else if (i === 3) {
            staffImg.src = "../src/pictures/matcha.png"
            staffImg.height = "200"
            staffImg.width = "300"
            nameContainer.textContent = "Luciano"
            phoneContainer.textContent = "Email: luciano_el_malcriado@gmail.com"
            emailContainer.textContent = "Phone: 673-201-6631"
        }
        else if (i === 4) {
            staffImg.src = "../src/pictures/milkmochabear.png"
            staffImg.height = "200"
            staffImg.width = "300"
            nameContainer.textContent = "Bradley and Thiana (the owners)"
            phoneContainer.textContent = "Email: shyantona@gmail.com"
            emailContainer.textContent = "Phone: 201-911-6732"
        }
    }

}
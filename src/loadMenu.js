export default function loadMenu() {
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
    mainDiv.setAttribute('id', 'mainmenu')
    mainDiv.classList.add('tabcontent');
    const menuTitleContainer = document.createElement('div');
    menuTitleContainer.setAttribute('id', 'menu-title')
    const h3Element = document.createElement('h3')
    h3Element.textContent = "Menu"
    h3Element.id = "menu"
    const foodsDiv = document.createElement('div');
    foodsDiv.setAttribute('id', 'foods');

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
    mainDiv.appendChild(menuTitleContainer)
    menuTitleContainer.appendChild(h3Element);
    mainDiv.appendChild(foodsDiv);
    for (let i = 0; i < 12; i++) {
        const foodImg = document.createElement('img');
        foodImg.classList.add("foodoptions");
        const imgCaption = document.createElement('p');
        const foodContainer = document.createElement('div');
        foodContainer.classList.add('foodcontainer');
        imgCaption.classList.add('imgcaption');
        foods.appendChild(foodContainer);
        foodContainer.appendChild(foodImg);
        foodContainer.appendChild(imgCaption);
        if (i === 0) {
            foodImg.src = "../src/pictures/a5-japanese-beef-roti-bowl.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'A5 Japanese Beef Roti Bowl'

        }
        else if (i === 1) {
            foodImg.src = "../src/pictures/autumn-election-special-beef-stew.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Autumn Election Special Beef Stew'

        }
        else if (i === 2) {
            foodImg.src = "../src/pictures/chaliapan-steak-bowl.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Chaliapan Steak Bowl'
        }
        else if (i === 3) {
            foodImg.src = "../src/pictures/gotcha-pork-roast.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Gotcha Pork Roast'
        }
        else if (i === 4) {
            foodImg.src = "../src/pictures/ichiraku-ramen.png" //NARUTO
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Ichiraku Ramen'
        }
        else if (i === 5) {
            foodImg.src = "../src/pictures/le-plat-veritable.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Le Plat Veritable'
        }
        else if (i === 6) {
            foodImg.src = "../src/pictures/naporitan-curry-fettucine.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Naporitan Curry Fettucine'
        }
        else if (i === 7) {
            foodImg.src = "../src/pictures/demi-glace-beef-chicken-duet.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Demi Glace Beef Chicken Duet'
        }
        else if (i === 8) {
            foodImg.src = "../src/pictures/dongpo-pork-curry-bowl.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Dongpo Pork Curry Bowl'
        }
        else if (i === 9) {
            foodImg.src = "../src/pictures/katsudon.png" //MHA
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Katsudon'
        }
        else if (i === 10) {
            foodImg.src = "../src/pictures/omurice.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Omurice'
        }
        else if (i === 11) {
            foodImg.src = "../src/pictures/transforming-furikake-rice.png" //FOOD WARS
            foodImg.width = "400"
            foodImg.height = "200"
            imgCaption.textContent = 'Transforming Furikake Rice'
        }
    }
    const footerElement = document.createElement('footer');
    footerElement.classList.add('tabcontent');
    footerElement.textContent = "All foods made by your favorite husband and wife: Bradley and Thiana (owners) with the help of their munchkins: Luciano and Titus!"
    contentElement.appendChild(footerElement);



}
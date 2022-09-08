import '../src/styles.css'
import loadPage from '../src/loadPage.js'
import loadMenu from '../src/loadMenu.js'
import loadHome from '../src/loadHome.js'
import loadContact from '../src/loadContact.js'
window.onload = loadPage;
document.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.tagName === 'A' && e.target.textContent === 'Home') {
        loadHome();

    }
    else if (e.target.tagName === 'A' && e.target.textContent === 'Menu') {
        loadMenu();
    }
    else if (e.target.tagName === 'A' && e.target.textContent === 'Contact') {
        loadContact();

    }
});

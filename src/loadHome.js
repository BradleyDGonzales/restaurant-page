import loadPage from '../src/loadPage.js'
export default function loadHome() {
    const contentElement = document.getElementById('content');
    let child = contentElement.lastElementChild;
    while (child) {
        contentElement.removeChild(child);
        child = contentElement.lastElementChild;
    }
    loadPage();
}
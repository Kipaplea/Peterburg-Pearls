import { fetchData, displayItems } from './api.js';

const list = document.querySelector('.content-items'); 
const searchInput = document.querySelector('.select__search'); 
const contentContainer = document.querySelector('.content'); 
const noResultsMessageElement = document.createElement('p'); 


function displayNoResultsMessage() {
    list.innerHTML = ''; 
    noResultsMessageElement.classList.add('content__none');
    noResultsMessageElement.textContent = 'Ничего не найдено';

    const existingMessage = contentContainer.querySelector('.content__none');
    if (existingMessage) {
        contentContainer.removeChild(existingMessage);
    }

    contentContainer.appendChild(noResultsMessageElement);
}

searchInput.addEventListener('input', async (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();

    if (searchTerm === '') {
        fetchData();
        return;
    }

    const url = `https://672b0d95976a834dd025652d.mockapi.io/Place-1`;
    const res = await fetch(url);
    const data = await res.json();

    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm));

    if (filteredData.length === 0) {
        displayNoResultsMessage();
    } else {
        displayItems(filteredData);

        const existingMessage = contentContainer.querySelector('.content__none');
        if (existingMessage) {
            contentContainer.removeChild(existingMessage);
        }
    }
});


fetchData();

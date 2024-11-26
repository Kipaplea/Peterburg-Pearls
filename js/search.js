import { fetchData, res } from './api.js';

const list = document.querySelector('.content-items');
const searchInput = document.querySelector('.select__search');
const contentContainer = document.querySelector('.content');
let noResultsMessageElement = null;

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = Array.isArray(res) ? res.filter(item => item.title.toLowerCase().includes(searchTerm)) : [];
    displayFilteredItems(filteredItems);
});

export function displayFilteredItems(filteredItems) {
    list.innerHTML = ''; 

    if (filteredItems.length === 0) {
        displayNoResultsMessage();
        return;
    }

    if (noResultsMessageElement) {
        noResultsMessageElement.remove();
        noResultsMessageElement = null;
    }

		list.style.display = 'grid'; 

    const contentHTML = filteredItems.map(item => `
        <div class="content-item">
            <img class="content__img" src="${item.photo}" alt="${item.title}">
            <div class="content__sub">
                <h2 class="content__title">${item.title}</h2>
                <p class="content__text">${item.text}</p>
                <p class="content__address">${item.address}</p>
                <a class="content__link" href="#">Перейти</a>
            </div>
        </div>
    `).join('');

    list.innerHTML = contentHTML;
}

function displayNoResultsMessage() {
    if (!noResultsMessageElement) {
        noResultsMessageElement = document.createElement('p');
        noResultsMessageElement.classList.add('content__none');
        noResultsMessageElement.textContent = 'Ничего не найдено';
				list.style.display = 'none'
        contentContainer.appendChild(noResultsMessageElement);
    }
}

fetchData();

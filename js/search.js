import { fetchData, displayItems } from './api.js';
const list = document.querySelector('.content-items');
const searchInput = document.querySelector('.select__search');

searchInput.addEventListener('input', async (e) => {

    const url = `https://672b0d95976a834dd025652d.mockapi.io/Place-1?search=${e.target.value}`;
    const res = await fetch(url);
    const data = await res.json();

    list.innerHTML = '';

    // if (!data.lenght == 0){
    displayItems(data)
    // } else {
    //     displayNoResultsMessage();
    // }
});

// function displayNoResultsMessage() {
//     if (!noResultsMessageElement) {
//         noResultsMessageElement = document.createElement('p');
//         noResultsMessageElement.classList.add('content__none');
//         noResultsMessageElement.textContent = 'Ничего не найдено';
// 				list.style.display = 'none'
//         contentContainer.appendChild(noResultsMessageElement);
//     }
// }

fetchData();

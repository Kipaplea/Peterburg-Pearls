import { res, displayItems } from './api.js';

const categoriesBtns = document.querySelectorAll('.select__filter-link');

async function handleFilter(category) {
    let filteredData;
    if (category === 'all') {
        filteredData = res;
    } else {
        filteredData = res.filter((item) => item.category === category);
    }
    displayItems(filteredData);
}

categoriesBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const category = event.target.value;
        handleFilter(category);
    });
});

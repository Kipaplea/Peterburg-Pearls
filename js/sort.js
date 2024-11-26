import { res } from './api.js';
import { displayFilteredItems } from './search.js';

const categoriesBtns = document.querySelectorAll('.select__filter-link')

categoriesBtns.forEach((btn) => {
btn.addEventListener('click', (event) => {
    const category = event.target.value
    let filteredData

    if (category === 'all') {
    filteredData = res
    } else {
    filteredData = res.filter((item) => item.category === category)
    }

    displayFilteredItems(filteredData)
    })
})

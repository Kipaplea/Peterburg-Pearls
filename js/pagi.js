// pagination.js
const itemsPerPage = 3;
let currentPage = 1;

const contentItems = document.querySelectorAll('.content-item');
const paginationContainer = document.createElement('div');
paginationContainer.classList.add('pagination');
document.querySelector('.content').appendChild(paginationContainer);

const sortedLinks = document.querySelectorAll('.select__filter-link');

function displayItems(page, filteredItems) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    filteredItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function updatePagination(filteredItems) {
    paginationContainer.innerHTML = '';

    const numPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;

    for (let i = 1; i <= numPages; i++) {
        const button = document.createElement('button');
        button.classList.add('pagination__button'); // Добавляем класс кнопке
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            displayItems(currentPage, filteredItems);
            updatePagination(filteredItems);
        });

        if (i === currentPage) {
            button.classList.add('active');
        }

        paginationContainer.appendChild(button);
    }
}

function handleSearchAndFilter(filteredItems = contentItems) {
    const searchTerm = document.querySelector('.select__search').value.toLowerCase();
    const activeFilter = document.querySelector('.select__filter-link.active').textContent;

    if (activeFilter === "Всё") {
        filteredItems = filterBySearchTerm(contentItems, searchTerm);
        updatePagination(filteredItems);
        displayItems(currentPage, filteredItems);
        paginationContainer.style.display = 'block'; // Show pagination
    } else {
        let categoryFiltered = filterByCategory(contentItems, activeFilter.toLowerCase());
        let filtered = filterBySearchTerm(categoryFiltered, searchTerm);

        displayItems(1, filtered); // Always display from the first page
        currentPage = 1; //Reset current page when the filter is clicked
        updatePagination(filtered); // Update pagination for filtered items
        paginationContainer.style.display = filtered.length > itemsPerPage ? 'block' : 'none'; // Show pagination ONLY if needed

    }
}


function filterBySearchTerm(items, searchTerm) { // Move to pagi.js
    return Array.from(items).filter(item => { // Add logic for handling subtitle as well
        const title = item.querySelector('.content__title')?.textContent.toLowerCase() || '';
        const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || '';

        return title.includes(searchTerm) || subtitle.includes(searchTerm);
    });
}



function filterByCategory(items, filterType) { //Move this from sort.js to pagi.js
    return Array.from(items).filter(item => {
        const title = item.querySelector('.content__title')?.textContent.toLowerCase() || '';
        const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || ''; //Added Subtitle

        if (filterType === 'музеи') {
            return title.includes('музей') || subtitle.includes('музей');
        } else if (filterType === 'памятники') {
            return !title.includes('музей') && !subtitle.includes('музей');
        } else {
            return true; // "Всё" - no filtering needed here anymore, handled above.
        }
    });
}

// Начальная настройка
displayItems(currentPage, contentItems);
updatePagination(contentItems);


sortedLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sortedLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        handleSearchAndFilter();
    });
});

document.querySelector('.select__search').addEventListener('input', handleSearchAndFilter);

sortedLinks[0].classList.add('active'); // "Всё" по умолчанию

handleSearchAndFilter();













// const itemsPerPage = 3;
// let currentPage = 1;

// const contentItems = Array.from(document.querySelectorAll('.content-item')); // Convert to array for easier manipulation
// const paginationContainer = document.createElement('div');
// paginationContainer.classList.add('pagination');
// document.querySelector('.content').appendChild(paginationContainer);

// const sortedLinks = document.querySelectorAll('.select__filter-link');
// const searchInput = document.querySelector('.select__search');


// function displayItems(page, itemsToDisplay) {
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     contentItems.forEach(item => item.style.display = 'none'); // Hide all items initially

//     itemsToDisplay.slice(startIndex, endIndex).forEach(item => item.style.display = 'block'); //Show current page from the filtered results

// }


// function updatePagination(itemsToDisplay) {  //Update to receive filtered results
//     paginationContainer.innerHTML = '';

//     const numPages = Math.ceil(itemsToDisplay.length / itemsPerPage) || 1;
//     // ... (rest of the updatePagination function remains the same)
// }

// function handleSearchAndFilter(filteredItems = contentItems) {
//     const searchTerm = searchInput.value.toLowerCase();
//     const activeFilter = document.querySelector('.select__filter-link.active').textContent;

//     // DON'T reset currentPage here. Keep track of it for pagination to work correctly.


//     if (activeFilter === "Всё") {
//       filteredItems = filterBySearchTerm(contentItems, searchTerm);
//     } else {
//       let categoryFiltered = filterByCategory(contentItems, activeFilter.toLowerCase());
//       filteredItems = filterBySearchTerm(categoryFiltered, searchTerm);
//     }

//     updatePagination(filteredItems); // Update pagination based on the filtered items
//     displayItems(currentPage, filteredItems);  // Display items for the current page


//     // Show pagination if there are more items than fit on one page, regardless of activeFilter
//     paginationContainer.style.display = filteredItems.length > itemsPerPage ? 'block' : 'none';
// }





// function filterBySearchTerm(items, searchTerm) {
//     return items.filter(item => { // Correctly handle both title and subtitle
//         const title = item.querySelector('.content__title')?.textContent.toLowerCase() || '';
//         const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || '';

//         return title.includes(searchTerm) || subtitle.includes(searchTerm);
//     });
// }

// function filterByCategory(items, filterType) {
//     return items.filter(item => {  // Correctly handle subtitle
//         const title = item.querySelector('.content__title')?.textContent.toLowerCase() || '';
//         const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || '';

//         if (filterType === 'музеи') {
//             return title.includes('музей') || subtitle.includes('музей');
//         } else if (filterType === 'памятники') {
//             return !title.includes('музей') && !subtitle.includes('музей'); // Added check
//         } else {
//             return true;
//         }
//     });
// }


// // Начальная настройка
// displayItems(currentPage, contentItems);
// updatePagination(contentItems);


// sortedLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         sortedLinks.forEach(link => link.classList.remove('active'));
//         link.classList.add('active');
//         handleSearchAndFilter();
//     });
// });

// document.querySelector('.select__search').addEventListener('input', handleSearchAndFilter);

// sortedLinks[0].classList.add('active'); // "Всё" по умолчанию

// handleSearchAndFilter();

// searchInput.addEventListener('input', handleSearchAndFilter); // Call handleSearchAndFilter on search input change
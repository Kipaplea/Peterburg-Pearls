// const filterLinks = document.querySelectorAll('.select__filter-link');
// const contentBlocks = document.querySelectorAll('.content-item');

// filterLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();

//         const filterType = link.textContent.toLowerCase(); 

//         contentBlocks.forEach(item => {
//         const title = item.querySelector('.content__title')?.textContent.toLowerCase() || '';
//         const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || '';

//         if (filterType === 'музеи') {
//             item.style.display = (title.includes('музей') || subtitle.includes('музей')) ? 'block' : 'none';
//         } else if (filterType === 'памятники') {
//             item.style.display = (!title.includes('музей') && !subtitle.includes('музей')) ? 'block' : 'none';
//         } else {
//             item.style.display = 'block';
//         }
//         });
//     });
// });



// filterLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         handleSearchAndFilter();
//     });
// });

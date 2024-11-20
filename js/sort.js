const filterLinks = document.querySelectorAll('.select__filter-link');
const contentBlocks = document.querySelectorAll('.content-item');

filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке

        const filterType = link.textContent.toLowerCase(); // Получаем текст ссылки (музеи, памятники или всё)

        contentBlocks.forEach(item => {
        const title = item.querySelector('.content__title')?.textContent.toLowerCase() || '';
        const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || '';

        if (filterType === 'музеи') {
            // Показываем только блоки, содержащие "музей" в заголовке или подзаголовке
            item.style.display = (title.includes('музей') || subtitle.includes('музей')) ? 'block' : 'none';
        } else if (filterType === 'памятники') {
            // Показываем только блоки, НЕ содержащие "музей" в заголовке или подзаголовке
            item.style.display = (!title.includes('музей') && !subtitle.includes('музей')) ? 'block' : 'none';
        } else {
            // Показываем все блоки
            item.style.display = 'block';
        }
        });
    });
});








filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // ... (other code)
        handleSearchAndFilter(); // Call handleSearchAndFilter on filter change
    });
});

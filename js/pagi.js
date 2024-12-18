document.addEventListener('DOMContentLoaded', async () => {
    const popularItems = document.querySelector('.popular-items'); // Контейнер для элементов
    const popular = document.querySelector('.popular'); // Родительский элемент
    const itemsPerPage = 2; // Количество элементов на первой странице
    const loadMoreCount = 2; // Количество элементов для загрузки при нажатии "Показать ещё"
    let currentPage = 1; // Текущая страница
    let totalItems = 0; // Общее количество элементов
    let isLoading = false; // Флаг для предотвращения множественных запросов

    const mask = document.querySelector('.mask'); // Лоадер

    // Функция для загрузки данных с сервера
    async function fetchData() {
        const url = `https://672b0d95976a834dd025652d.mockapi.io/Place-1`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    // Функция для сортировки данных по убыванию популярности
    function sortDataByPopularity(data) {
        return data.sort((a, b) => b.popularity - a.popularity);
    }

    // Функция для отображения данных
    function displayItems(data) {
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('popular-item');
            itemElement.innerHTML = `
                <img class="popular__img" src="${item.photo}" alt="${item.title}">
                <div class="popular__sub">
                    <h2 class="popular__title">${item.title}</h2>
                    <p class="popular__text">${item.text}</p>
                    <p class="popular__address">${item.address}</p>                
                    <a class="popular__link" href="#">Перейти</a>
                </div>
            `;
            popularItems.appendChild(itemElement);
        });
    }

    // Функция для создания кнопки "Показать ещё"
    function createLoadMoreButton() {
        const button = document.createElement('button');
        button.classList.add('pagination__button');
        button.textContent = 'Показать ещё';
        button.addEventListener('click', loadMore);
        popular.appendChild(button);
    }

    // Функция для удаления кнопки "Показать ещё"
    function removeLoadMoreButton() {
        const button = popular.querySelector('.pagination__button');
        if (button) {
            button.remove();
        }
    }

    // Функция для загрузки дополнительных данных
    async function loadMore() {
        if (isLoading) return; // Предотвращаем множественные запросы
        isLoading = true;

        // Показываем лоадер
        mask.classList.remove('hide');
        mask.classList.add('active');

        // Загружаем данные с сервера
        const data = await fetchData();
        const sortedData = sortDataByPopularity(data);

        // Определяем индексы для отображения следующих элементов
        const startIndex = currentPage * loadMoreCount;
        const endIndex = startIndex + loadMoreCount;
        const nextItems = sortedData.slice(startIndex, endIndex);

        // Скрываем лоадер
        mask.classList.remove('active');
        mask.classList.add('hide');

        if (nextItems.length > 0) {
            displayItems(nextItems);
            currentPage++;
            totalItems += nextItems.length;
        }

        // Если данные закончились, удаляем кнопку
        if (endIndex >= sortedData.length) {
            removeLoadMoreButton();
        }

        isLoading = false;
    }

    // Инициализация: загружаем первую страницу
    const data = await fetchData();
    const sortedData = sortDataByPopularity(data);

    // Отображаем первые элементы
    const initialItems = sortedData.slice(0, itemsPerPage);
    displayItems(initialItems);
    totalItems = initialItems.length;

    // Если есть больше данных, добавляем кнопку "Показать ещё"
    if (sortedData.length > itemsPerPage) {
        createLoadMoreButton();
    }
});